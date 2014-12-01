define("storage", [ "underscore" ], function(e) {
  function t(t) {
    try {
      return e.compact(localStorage[t].split(";"));
    } catch (n) {
      return localStorage[t] = ";", [];
    }
  }
  var n, i, r = t("file.list"), o = localStorage.version;
  if (void 0 === o && (localStorage.removeItem("sync.queue"), localStorage.removeItem("sync.current"), 
      localStorage.removeItem("file.counter"), e.each(r, function(n) {
        localStorage[n + ".publish"] = ";";
        var i = t(n + ".sync");
        e.each(i, function(e) {
          localStorage[e + ".contentCRC"] = "0", void 0 !== localStorage[e + ".etag"] && (localStorage[e + ".titleCRC"] = "0");
        });
      }), o = "v1"), "v1" == o) {
    var a = localStorage["sync.gdrive.lastChangeId"];
    a && (localStorage["gdrive.lastChangeId"] = a, localStorage.removeItem("sync.gdrive.lastChangeId"));
    var s = localStorage["sync.dropbox.lastChangeId"];
    s && (localStorage["dropbox.lastChangeId"] = s, localStorage.removeItem("sync.dropbox.lastChangeId"));
    var l = "gdrive", c = "dropbox", u = "sync." + l + ".", d = "sync." + c + ".";
    e.each(r, function(n) {
      var i = t(n + ".sync");
      e.each(i, function(e) {
        var t = {};
        0 === e.indexOf(u) ? (t.provider = l, t.id = e.substring(u.length), t.etag = localStorage[e + ".etag"], 
          t.contentCRC = localStorage[e + ".contentCRC"], t.titleCRC = localStorage[e + ".titleCRC"]) : 0 === e.indexOf(d) && (t.provider = c, 
            t.path = decodeURIComponent(e.substring(d.length)), t.version = localStorage[e + ".version"], 
            t.contentCRC = localStorage[e + ".contentCRC"]), localStorage[e] = JSON.stringify(t), 
          localStorage.removeItem(e + ".etag"), localStorage.removeItem(e + ".version"), localStorage.removeItem(e + ".contentCRC"), 
        localStorage.removeItem(e + ".titleCRC");
      });
    }), o = "v2";
  }
  return "v2" == o && (e.each(r, function(t) {
    e.has(localStorage, t + ".sync") || (localStorage.removeItem(t + ".title"), localStorage.removeItem(t + ".publish"), 
      localStorage.removeItem(t + ".content"), localStorage["file.list"].replace(";" + t + ";", ";"));
  }), o = "v3"), "v3" == o && (n = localStorage["file.current"], void 0 !== n && -1 === localStorage["file.list"].indexOf(";" + n + ";") && localStorage.removeItem("file.current"), 
  o = "v4"), "v4" == o && (localStorage.removeItem("githubToken"), o = "v5"), "v5" == o && (e.each(r, function(n) {
    var i = t(n + ".publish");
    e.each(i, function(e) {
      var t = JSON.parse(localStorage[e]);
      "gdrive" == t.provider && (t.id = t.fileId, t.fileId = void 0, localStorage[e] = JSON.stringify(t));
    });
  }), o = "v6"), "v6" == o && (n = localStorage["file.current"], void 0 !== n && (localStorage[n + ".selectTime"] = new Date().getTime(), 
    localStorage.removeItem("file.current")), o = "v7"), ("v7" == o || "v8" == o || "v9" == o) && (e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
    delete i.editorFontFamily, delete i.editorFontSize, i.template && (i.template = i.template.replace("http://benweet.github.io/stackedit/css/main-min.css", "http://benweet.github.io/stackedit/res-min/themes/default.css")), 
    localStorage.settings = JSON.stringify(i)), o = "v10"), "v10" == o && (e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
    ((i.extensionSettings || {}).markdownExtra || {}).extensions && i.extensionSettings.markdownExtra.extensions.push("smartypants"), 
    "http://stackedit-ssh-proxy.herokuapp.com/" == i.sshProxy && (i.sshProxy = "https://stackedit-ssh-proxy.herokuapp.com/"), 
    i.template && (i.template = i.template.replace("http://benweet.github.io/stackedit/lib/", "https://stackedit.io/libs/")), 
    i.template && (i.template = i.template.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
    i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("http://benweet.github.io/stackedit/lib/", "https://stackedit.io/libs/")), 
    i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
    i.defaultContent && (i.defaultContent = i.defaultContent.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
    i.commitMsg && (i.commitMsg = i.commitMsg.replace("http://benweet.github.io/stackedit/", "https://stackedit.io/")), 
    localStorage.settings = JSON.stringify(i)), o = "v11"), "v11" == o && (localStorage.removeItem("theme"), 
  e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), delete i.editorFontFamily, 
    delete i.editorFontSize, i.template && (i.template = i.template.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
    i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
    localStorage.settings = JSON.stringify(i)), o = "v12"), ("v12" == o || "v13" == o) && (e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
    delete i.editorFontFamily, localStorage.settings = JSON.stringify(i)), o = "v14"), 
    "v14" == o && (e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
          i.template && (i.template = i.template.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
          i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("https://stackedit.io/res-min/themes/default.css", "https://stackedit.io/res-min/themes/base.css")), 
          localStorage.settings = JSON.stringify(i)), o = "v15"), "v15" == o && (localStorage.removeItem("gdrivePermissions"), 
        e.has(localStorage, "gdrive.lastChangeId") && (localStorage["google.gdrive0.gdrive.lastChangeId"] = localStorage["gdrive.lastChangeId"], 
          localStorage.removeItem("gdrive.lastChangeId")), e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
          ((i.extensionSettings || {}).markdownExtra || {}).extensions && (i.extensionSettings.markdownExtra.extensions.push("newlines"), 
            i.extensionSettings.markdownExtra.extensions.push("strikethrough")), localStorage.settings = JSON.stringify(i)), 
        o = "v16"), ("v16" == o || "v17" == o) && (localStorage.removeItem("focusMode"), 
          localStorage.removeItem("mode"), localStorage.removeItem("gdrive.state"), localStorage.removeItem("google.picasa0.permissions"), 
          localStorage.removeItem("google.picasa0.userId"), e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
            delete i.shortcuts, delete i.editorFontFamily, delete i.editorFontSize, delete i.maxWidth, 
            localStorage.settings = JSON.stringify(i)), o = "v18"), "v18" == o && (e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
            ((i.extensionSettings || {}).markdownExtra || {}).diagrams = !0, localStorage.settings = JSON.stringify(i)), 
          o = "v19"), "v19" == o && (localStorage.removeItem("themeV3"), localStorage.removeItem("welcomeTour"), 
            e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), delete i.pdfTemplate, 
              delete i.pdfPageSize, delete i.sshProxy, localStorage.settings = JSON.stringify(i)), 
            o = "v20"), "v20" == o && (e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
                delete i.markdownMimeType, localStorage.settings = JSON.stringify(i)), o = "v21"), 
            "v21" == o && (e.has(localStorage, "settings") && (i = JSON.parse(localStorage.settings), 
                  i.template && (i.template = i.template.replace("https://stackedit.io/libs/MathJax/", "https://cdn.mathjax.org/mathjax/latest/")), 
                  i.pdfTemplate && (i.pdfTemplate = i.pdfTemplate.replace("/libs/MathJax/", "/res/bower-libs/MathJax/")), 
                  localStorage.settings = JSON.stringify(i)), o = "v22"), localStorage.version = o, 
            localStorage;} ])
