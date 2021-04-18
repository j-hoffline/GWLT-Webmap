window.addEventListener("load", function () {
    parent.window.postMessage(window.location.href, "*");
  });
