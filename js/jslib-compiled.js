System.register("testDrawer", [], function (exports_1, context_1) {
    "use strict";
    var Param, smsjson, Names, Icons, Name, Ico, data, request, TestDrawer;
    var __moduleName = context_1 && context_1.id;
    function smsjsRequestListener() {
        smsjson = JSON.parse(this.responseText);
        for (var i = 0; i < 40; i++) {
            Names[i] = smsjson[i].Name;
            Icons[i] = smsjson[i].Ico;
        }
    }
    return {
        setters: [],
        execute: function () {
            Param = (function () {
                function Param() {
                    this.Name = 'API Key';
                    this.Type = 0;
                    this.Acr = 'apiKey';
                }
                return Param;
            }());
            Names = new Array(43);
            Icons = new Array(43);
            data = {
                "Name": Names,
                "Ico": Icons
            };
            request = new XMLHttpRequest();
            request.onload = smsjsRequestListener;
            request.open("get", "js/sms.js", true);
            request.send();
            TestDrawer = (function () {
                function TestDrawer() {
                }
                TestDrawer.prototype.draw = function () {
                    var body = $('body');
                    body.append($.mustache(window.TemplateJS.test, {}));
                    var section = $('p');
                    for (var i = 0; i < 40; i++) {
                        Name = data.Name[i];
                        Ico = Icons[i];
                        section.append($.mustache(window.TemplateJS.item, {}));
                    }
                };
                TestDrawer.prototype.loadData = function () {
                    $.ajax({});
                };
                return TestDrawer;
            }());
            exports_1("TestDrawer", TestDrawer);
        }
    };
});
System.register("app", ["testDrawer"], function (exports_2, context_2) {
    "use strict";
    var testDrawer_1, drawer;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (testDrawer_1_1) {
                testDrawer_1 = testDrawer_1_1;
            }
        ],
        execute: function () {
            drawer = new testDrawer_1.TestDrawer();
            drawer.draw();
        }
    };
});
//# sourceMappingURL=jslib-compiled.js.map