---
title: Why your network requests may timeout intermittently in your iOS simulator
description: Sometimes the iOS simulators refused to connect to our backend, and all the requests did timeout. Here's how we solved it.
author: Mario Nachbaur Riscos
date: 2024-11-05
---

**TL;DR:** It appears that setting `URLSessionConfiguration.multipathServiceType = .handover` messes up with the simulator. Use conditional compilation to only set it on physical devices.

---

For some time, we at the iOS team at work were experiencing a quite strange phenomenon with the iOS simulators. Sometimes, some days, but not always, the iOS simulators refused to connect to our backend APIs, and all the requests did timeout. This meant we had to switch to developing and testing on our physical devices, which is a tad more inconvenient. Restarting the router, disconnecting or connecting to a VPN would help fix the issue, but not always.

We even thought our backend, or any proxy service in use, had some sort of geographical restriction or protection against bots — remember, only the simulators were affected. But inspecting the raw network requests, the ones made with a physical device and the ones from a simulator were 100% identical, so not sure how they would detect a simulator request.

After a long debugging session, we noticed we were initiating our `URLSession` objects in the following manner:

```swift
let configuration = URLSessionConfiguration.default
configuration.multipathServiceType = .handover
// ...
let session = URLSession(configuration: configuration)
```

From the [`.handover` documentation][handover]:

> A Multipath TCP service that provides seamless handover between Wi-Fi and cellular in order to preserve the connection.

which sounds amazing, specially for an app like ours designed for people on the go. I seems that that setting was responsible for the timeouts in the iOS simulator. Only in the simulator. So we changed the initialization code to something like:

```swift
#if !targetEnvironment(simulator)
configuration.multipathServiceType = .handover
#endif
```

---

The documentation for `.handover` also mentions that you should only use it "for long-lived or persistent connections", so we will also tweak which `URLSession`s have that option enabled and which don't.

[handover]: https://developer.apple.com/documentation/foundation/urlsessionconfiguration/multipathservicetype/handover
