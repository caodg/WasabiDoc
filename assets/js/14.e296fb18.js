(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{217:function(e,t,s){"use strict";s.r(t);var n=s(0),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"coding-conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coding-conventions"}},[e._v("#")]),e._v(" Coding Conventions")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#codemaid"}},[e._v("CodeMaid")])]),s("li",[s("a",{attrs:{href:"#editorconfig"}},[e._v(".editorconfig")])]),s("li",[s("a",{attrs:{href:"#refactoring"}},[e._v("Refactoring")])]),s("li",[s("a",{attrs:{href:"#comments"}},[e._v("Comments")])]),s("li",[s("a",{attrs:{href:"#asynchronous-locking"}},[e._v("Asynchronous Locking")])]),s("li",[s("a",{attrs:{href:"#null-check"}},[e._v("Null Check")])]),s("li",[s("a",{attrs:{href:"#blocking"}},[e._v("Blocking")])]),s("li",[s("a",{attrs:{href:"#async-void"}},[e._v("async void")])]),s("li",[s("a",{attrs:{href:"#disposing-subscriptions-in-reactiveobjects"}},[e._v("Disposing Subscriptions in ReactiveObjects")])]),s("li",[s("a",{attrs:{href:"#observableaspropertyhelpers-over-properties"}},[e._v("ObservableAsPropertyHelpers Over Properties")])])])]),s("p"),e._v(" "),s("hr"),e._v(" "),s("h2",{attrs:{id:"codemaid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codemaid"}},[e._v("#")]),e._v(" CodeMaid")]),e._v(" "),s("p",[s("strong",[e._v("DO")]),e._v(" use "),s("a",{attrs:{href:"http://www.codemaid.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CodeMaid"),s("OutboundLink")],1),e._v(", a Visual Studio extension to automatically clean up your code on saving the file.")]),e._v(" "),s("p",[e._v("CodeMaid is a non-intrusive code cleanup tool.\nWasabi's CodeMaid settings "),s("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/CodeMaid.config",target:"_blank",rel:"noopener noreferrer"}},[e._v("can be found in the root of the repository"),s("OutboundLink")],1),e._v(", and are automatically picked up by Visual Studio when you open the project, assuming the CodeMaid extension is installed.\nUnfortunately CodeMaid has no Visual Studio Code extension yet.\nYou can check out the progress on this "),s("a",{attrs:{href:"https://github.com/codecadwallader/codemaid/issues/273",target:"_blank",rel:"noopener noreferrer"}},[e._v("under this GitHub issue"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"editorconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editorconfig"}},[e._v("#")]),e._v(" .editorconfig")]),e._v(" "),s("p",[e._v("Not only CodeMaid, but Visual Studio also enforces certain code style through "),s("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/.editorconfig",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v(".editorconfig")]),s("OutboundLink")],1),e._v(" file.")]),e._v(" "),s("p",[e._v("If you are using Visual Studio code, please "),s("strong",[e._v("DO")]),e._v(" install the "),s("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("editorconfig extension"),s("OutboundLink")],1),e._v(" for it to make sure your coding style will resemble to ours.")]),e._v(" "),s("h2",{attrs:{id:"refactoring"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#refactoring"}},[e._v("#")]),e._v(" Refactoring")]),e._v(" "),s("p",[e._v("If you are a new contributor "),s("strong",[e._v("DO")]),e._v(" keep refactoring pull requests short, uncomplex and easy to verify.\nIt requires a certain level of experience to know where the code belongs to and to understand the full ramification (including rebase effort of open pull requests) - "),s("a",{attrs:{href:"https://github.com/bitcoin/bitcoin/blob/master/CONTRIBUTING.md#refactoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("source"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"comments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comments"}},[e._v("#")]),e._v(" Comments")]),e._v(" "),s("p",[s("strong",[e._v("DO")]),e._v(" follow "),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/inside-a-program/coding-conventions#commenting-conventions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft's C# commenting conventions"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("ul",[s("li",[e._v("Place the comment on a separate line, not at the end of a line of code.")]),e._v(" "),s("li",[e._v("Begin comment text with an uppercase letter.")]),e._v(" "),s("li",[e._v("End comment text with a period.")]),e._v(" "),s("li",[e._v("Insert one space between the comment delimiter ("),s("code",[e._v("//")]),e._v(") and the comment text, as shown in the following example.")]),e._v(" "),s("li",[e._v("Do not create formatted blocks of asterisks around comments.")])]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// The following declaration creates a query. It does not run\n// the query.\n")])])]),s("h2",{attrs:{id:"asynchronous-locking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#asynchronous-locking"}},[e._v("#")]),e._v(" Asynchronous Locking")]),e._v(" "),s("p",[s("strong",[e._v("DO NOT")]),e._v(" use mix awaitable and non-awaitable locks.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// GOOD\nprivate AsyncLock AsyncLock { get; } = new AsyncLock();\nusing (await AsyncLock.LockAsync())\n{\n\t...\n}\n\n// GOOD\nprivate object Lock { get; } = new object();\nlock (Lock)\n{\n\t...\n}\n\n// BAD\nusing (AsyncLock.Lock())\n{\n\t...\n}\n")])])]),s("h2",{attrs:{id:"null-check"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null-check"}},[e._v("#")]),e._v(" Null Check")]),e._v(" "),s("p",[s("strong",[e._v("DO")]),e._v(" use "),s("code",[e._v("is null")]),e._v(" instead of "),s("code",[e._v("== null")]),e._v(".\nIt was a performance consideration in the past but from C# 7.0 it does not matter anymore, today we use this convention to keep our code consistent.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("\tif (foo is null) return;\n")])])]),s("h2",{attrs:{id:"blocking"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blocking"}},[e._v("#")]),e._v(" Blocking")]),e._v(" "),s("p",[s("strong",[e._v("DO NOT")]),e._v(" block with "),s("code",[e._v(".Result, .Wait(), .GetAwaiter().GetResult()")]),e._v(".\nNever.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// BAD\nIoHelpers.DeleteRecursivelyWithMagicDustAsync(Folder).GetAwaiter().GetResult();\n")])])]),s("h2",{attrs:{id:"async-void"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-void"}},[e._v("#")]),e._v(" "),s("code",[e._v("async void")])]),e._v(" "),s("p",[s("strong",[e._v("DO NOT")]),e._v(" "),s("code",[e._v("async void")]),e._v(", except for event subscriptions.\n"),s("code",[e._v("async Task")]),e._v(" instead.\n"),s("strong",[e._v("DO")]),e._v(" "),s("code",[e._v("try catch")]),e._v(" in "),s("code",[e._v("async void")]),e._v(", otherwise the software can crash.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{\n\tMyClass.SomethingHappened += MyClass_OnSomethingHappenedAsync;\n}\n\n// GOOD\nprivate async void Synchronizer_ResponseArrivedAsync(object sender, EventArgs e)\n{\n\ttry\n\t{\n\t\tawait FooAsync();\n\t}\n\tcatch (Exception ex)\n\t{\n\t\tLogger.LogError<MyClass2>(ex);\n\t}\n}\n")])])]),s("h2",{attrs:{id:"disposing-subscriptions-in-reactiveobjects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disposing-subscriptions-in-reactiveobjects"}},[e._v("#")]),e._v(" Disposing Subscriptions in ReactiveObjects")]),e._v(" "),s("p",[s("strong",[e._v("DO")]),e._v(" follow "),s("a",{attrs:{href:"https://reactiveui.net/docs/guidelines/framework/dispose-your-subscriptions",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactiveUI's Subscription Disposing Conventions"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("DO")]),e._v(" dispose your subscription if you are referencing another object.\n"),s("strong",[e._v("DO")]),e._v(" use the "),s("code",[e._v(".DisposeWith()")]),e._v(" method.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Observable.FromEventPattern(...)\n\t.ObserveOn(RxApp.MainThreadScheduler)\n\t.Subscribe(...)\n\t.DisposeWith(Disposables);\n")])])]),s("p",[s("strong",[e._v("DO NOT")]),e._v(" dispose your subscription if a component exposes an event and also subscribes to it itself.\nThat's because the subscription is manifested as the component having a reference to itself.\nSame is true with Rx.\nIf you're a VM and you e.g. WhenAnyValue against your own property, there's no need to clean that up because that is manifested as the VM having a reference to itself.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("this.WhenAnyValue(...)\n\t.ObserveOn(RxApp.MainThreadScheduler)\n\t.Subscribe(...);\n")])])]),s("h2",{attrs:{id:"observableaspropertyhelpers-over-properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observableaspropertyhelpers-over-properties"}},[e._v("#")]),e._v(" ObservableAsPropertyHelpers Over Properties")]),e._v(" "),s("p",[s("strong",[e._v("DO")]),e._v(" follow "),s("a",{attrs:{href:"https://reactiveui.net/docs/guidelines/framework/prefer-oaph-over-properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("ReactiveUI's Oaph Over Properties Principle"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("DO")]),e._v(" use  "),s("code",[e._v("ObservableAsPropertyHelper")]),e._v(" with "),s("code",[e._v("WhenAny")]),e._v(" when a property's value depends on another property, a set of properties, or an observable stream, rather than set the value explicitly.")]),e._v(" "),s("div",{staticClass:"language-cs extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public class RepositoryViewModel : ReactiveObject\n{\n  private ObservableAsPropertyHelper<bool> _canDoIt;\n  \n  public RepositoryViewModel()\n  {\n    _canDoIt = this.WhenAnyValue(...)\n\t\t.ToProperty(this, x => x.CanDoIt, scheduler: RxApp.MainThreadScheduler);\n  }\n  \n  public bool CanDoIt => _canDoIt?.Value ?? false;\n}\n")])])]),s("p",[s("strong",[e._v("DO")]),e._v(" always subscribe to these "),s("code",[e._v("ObservableAsPropertyHelper")]),e._v("s after their initialization is done.")])])}),[],!1,null,null,null);t.default=r.exports}}]);