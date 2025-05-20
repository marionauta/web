---
title: Renaming variables in Swift closure capture lists
description: Learning what capture lists are and a sample use case of renaming variables inside them. 
author: Mario Nachbaur Riscos
date: 2024-03-28
---

If you have written any Swift code, you probably have seen capture lists. Let me show them to you in case you're not sure what they are:

```swift
class Some {
  var number: Int = 42

  func method() {
    someNetworkRequest(callback: { [weak self] result in
      self?.number = result //     ^ this thing right here
    })
  }
}
```

That thing between the square brackets (`[ ]`) is the capture list. It allows us to define the context of the callback. In this case, we capture `self` weakly, to avoid memory cycles.

## The problem

With the introduction of iOS 17, SwiftUI gained a new `View` modifier: `onChange(of:action:)` where `action` takes two values, the old one and the new one. This allows code such as:

```swift
struct Some: View {
  @State private var isCreating: Bool = false

  var body: some View {
    Text("")
      .onChange(of: isCreating) { wasCreating, isCreating in
        guard wasCreating && !isCreating else { return }
        print("Finished creating")
      }
    }
}
```

> _This is just a simplified example to show the modifier. Just imagine that instead of a `Bool` we are using an enum with many cases._

On iOS 16 and prior, the modifier only provides the new value, making it difficult to check the current value and the previous one. There is however, a small workaround using capture lists:

```swift
onChange(of: isCreating) { [isCreating] newValue in
  guard isCreating && !newValue else { return }
  print("Finished creating")
}
```

Using a capture list, we can capture the current value, which is equivalent to the old value. And the callback provides us with `newValue`.

## The solution

The previous code works, but the naming is awkward. `isCreating` points to the old value, and `newValue` is too generic. We could rename it to `newIsCreating`, but still, not the best name.

Here is when renaming variables inside the capture list shines. Let's look at the example:

```swift
onChange(of: isCreating) { [wasCreating = isCreating] isCreating in
  guard wasCreating && !isCreating else { return }
  print("Finished creating")
}
```

Inside the capture group, we are declaring a new variable `wasCreating` which the value of the captured variable `isCreating` (the old value). Then the callback provides us with `isCreating` (the new value)

## Finishing

The examples shown may be obsolete with iOS 17 new modifier, but there are a lot of developers supporting iOS 16 and below. I wrote this article solving the exact problem I faced, but I'm sure there will be many, many situations where renaming a variable would be very helpful.
