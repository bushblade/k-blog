var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/components/ThreeScene.tsx
var ThreeScene_exports = {};
__export(ThreeScene_exports, {
  default: () => ThreeScene
});
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState as useState5 } from "react";
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
function ThreeScene({
  glbFileUrl,
  bgColour
}) {
  let [dragging, setDragging] = useState5(!1);
  return /* @__PURE__ */ jsxDEV22(
    "div",
    {
      id: "canvas-container",
      className: "hover:cursor-grab active:cursor-grabbing rounded-box bg-base-100",
      children: /* @__PURE__ */ jsxDEV22(
        Canvas,
        {
          style: {
            width: "100%",
            aspectRatio: "16/9",
            backgroundColor: bgColour
          },
          onPointerDown: () => setDragging(!0),
          onPointerUp: () => setDragging(!1),
          className: "rounded-box",
          children: /* @__PURE__ */ jsxDEV22(Suspense, { fallback: null, children: [
            /* @__PURE__ */ jsxDEV22(MyMesh, { glbFileUrl, dragging }, void 0, !1, {
              fileName: "app/components/ThreeScene.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV22(OrbitControls, {}, void 0, !1, {
              fileName: "app/components/ThreeScene.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV22(Environment, { preset: "sunset", background: !1 }, void 0, !1, {
              fileName: "app/components/ThreeScene.tsx",
              lineNumber: 33,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ThreeScene.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/ThreeScene.tsx",
          lineNumber: 20,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/ThreeScene.tsx",
      lineNumber: 16,
      columnNumber: 5
    },
    this
  );
}
function MyMesh({
  glbFileUrl,
  dragging
}) {
  let gltf = useGLTF(glbFileUrl), myMesh = useRef();
  return useFrame(() => {
    myMesh.current && !dragging && (myMesh.current.rotation.y += 0.01);
  }), /* @__PURE__ */ jsxDEV22("primitive", { object: gltf.scene, scale: 0.8, ref: myMesh }, void 0, !1, {
    fileName: "app/components/ThreeScene.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
var init_ThreeScene = __esm({
  "app/components/ThreeScene.tsx"() {
    "use strict";
  }
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  action: () => action,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Outlet,
  Scripts,
  ScrollRestoration,
  LiveReload,
  useRouteError,
  isRouteErrorResponse
} from "@remix-run/react";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Y7CDXO2F.css";

// app/Document.tsx
import { useState } from "react";
import { Links, Meta, useFetcher, useLoaderData } from "@remix-run/react";

// app/components/ThemeIcon.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function ThemeIcon() {
  return /* @__PURE__ */ jsxDEV2(
    "svg",
    {
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg",
      height: "50px",
      width: "50px",
      children: [
        /* @__PURE__ */ jsxDEV2(
          "path",
          {
            fill: "#A57939",
            d: "M59 36c-.25-.75-.71-2.1-2-3-1.56-1.08-3.63-1.01-4-1-.76.03-1.18.16-2 0-.58-.12-1.53-.3-2-1-.4-.59-.15-1.08 0-3 .12-1.51.17-2.27 0-3-.37-1.58-1.49-2.56-2-3-1.05-.92-2.38-1.56-5-2-1.82-.31-4.75-.6-9 0-2.15.3-5.46.87-8 1.72-1.77.58-3.74 1.41-6 3-.02.01-.04.02-.05.03-3.44 2.24-5.39 6.2-5.22 10.31C14.64 57.13 54.56 59.91 59 41c.09-.6.79-2.65 0-5zm-20.79-5.88a2.76 2.76 0 0 1-2.76-2.76c0-1.53 1.23-2.76 2.76-2.76h2.71a2.76 2.76 0 1 1 0 5.52h-2.71z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ThemeIcon.tsx",
            lineNumber: 9,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV2("circle", { cx: 20, cy: 33, r: 3, fill: "#61B2E4" }, void 0, !1, {
          fileName: "app/components/ThemeIcon.tsx",
          lineNumber: 13,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV2("circle", { cx: 25, cy: 42, r: 3, fill: "#5C9E31" }, void 0, !1, {
          fileName: "app/components/ThemeIcon.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV2("circle", { cx: 35, cy: 45, r: 3, fill: "#FCEA2B" }, void 0, !1, {
          fileName: "app/components/ThemeIcon.tsx",
          lineNumber: 15,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV2("circle", { cx: 45, cy: 44, r: 3, fill: "#D22F27" }, void 0, !1, {
          fileName: "app/components/ThemeIcon.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV2("g", { fill: "none", stroke: "#000", strokeMiterlimit: 10, strokeWidth: 2, children: [
          /* @__PURE__ */ jsxDEV2(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              d: "M59 36c-.25-.75-.71-2.1-2-3-1.56-1.08-3.63-1.01-4-1-.76.03-1.18.16-2 0-.58-.12-1.53-.3-2-1-.4-.59-.15-1.08 0-3 .12-1.51.17-2.27 0-3-.37-1.58-1.49-2.56-2-3-1.05-.92-2.38-1.56-5-2-1.82-.31-4.75-.6-9 0-2.15.3-5.46.87-8 1.72-1.77.58-3.74 1.41-6 3-.02.01-.04.02-.05.03-3.44 2.24-5.39 6.2-5.22 10.31C14.64 57.13 54.56 59.91 59 41c.09-.6.79-2.65 0-5zm-20.79-5.88a2.76 2.76 0 0 1-2.76-2.76c0-1.53 1.23-2.76 2.76-2.76h2.71a2.76 2.76 0 1 1 0 5.52h-2.71z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ThemeIcon.tsx",
              lineNumber: 18,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2("circle", { cx: 20, cy: 33, r: 3 }, void 0, !1, {
            fileName: "app/components/ThemeIcon.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2(
            "circle",
            {
              cx: 25,
              cy: 42,
              r: 3,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ThemeIcon.tsx",
              lineNumber: 24,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV2("circle", { cx: 35, cy: 45, r: 3 }, void 0, !1, {
            fileName: "app/components/ThemeIcon.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV2("circle", { cx: 45, cy: 44, r: 3 }, void 0, !1, {
            fileName: "app/components/ThemeIcon.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ThemeIcon.tsx",
          lineNumber: 17,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/ThemeIcon.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/MoonSVG.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function MoonSVG({ className }) {
  return /* @__PURE__ */ jsxDEV3(
    "svg",
    {
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsxDEV3(
          "path",
          {
            fill: "#FCEA2B",
            d: "M7.363 42.41c4.553 6.17 11.874 10.172 20.13 10.172 13.808 0 25-11.193 25-25 0-8.523-4.264-16.05-10.776-20.562C54.756 9.858 64.5 21.463 64.5 35.352c0 16.016-12.984 29-29 29-13.588 0-24.99-9.33-28.136-21.943z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/MoonSVG.tsx",
            lineNumber: 8,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          "path",
          {
            fill: "#F1B31C",
            d: "M45.837 9.21c8.25 4.25 16.195 11.873 16.195 24.675 0 15.45-12.524 27.974-27.974 27.974-9.243 0-19.752-4.836-24.294-15.544 0 0 4.38 18.657 25.72 18.665 19.326.007 28.041-20.622 28.041-20.622C70.033 12.382 45.837 9.211 45.837 9.211z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/MoonSVG.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV3(
          "path",
          {
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeWidth: 2,
            d: "M7.363 42.41c4.553 6.17 11.874 10.172 20.13 10.172 13.808 0 25-11.193 25-25 0-8.523-4.264-16.05-10.776-20.562C54.756 9.858 64.5 21.463 64.5 35.352c0 16.016-12.984 29-29 29-13.588 0-24.99-9.33-28.136-21.943z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/MoonSVG.tsx",
            lineNumber: 16,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/MoonSVG.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/SunSVG.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function SunSVG({ className }) {
  return /* @__PURE__ */ jsxDEV4(
    "svg",
    {
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsxDEV4(
          "path",
          {
            fill: "#FCEA2B",
            d: "m66 36-10.676 5.182 6.658 9.824-11.84-.864.864 11.84-9.825-6.658L36 66l-5.182-10.676-9.824 6.658.864-11.84-11.84.864 6.658-9.825L6 36l10.677-5.182-6.659-9.824 11.84.864-.864-11.84 9.825 6.658L36 6l5.182 10.677 9.824-6.659-.864 11.84 11.84-.864-6.658 9.825z"
          },
          void 0,
          !1,
          {
            fileName: "app/components/SunSVG.tsx",
            lineNumber: 8,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV4(
          "g",
          {
            fill: "none",
            stroke: "#000",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
            strokeWidth: 2,
            children: [
              /* @__PURE__ */ jsxDEV4("circle", { cx: 36, cy: 35.95, r: 19.828 }, void 0, !1, {
                fileName: "app/components/SunSVG.tsx",
                lineNumber: 20,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ jsxDEV4("path", { d: "m66 36-10.676 5.182 6.658 9.824-11.84-.864.864 11.84-9.825-6.658L36 66l-5.182-10.676-9.824 6.658.864-11.84-11.84.864 6.658-9.825L6 36l10.677-5.182-6.659-9.824 11.84.864-.864-11.84 9.825 6.658L36 6l5.182 10.677 9.824-6.659-.864 11.84 11.84-.864-6.658 9.825z" }, void 0, !1, {
                fileName: "app/components/SunSVG.tsx",
                lineNumber: 21,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/SunSVG.tsx",
            lineNumber: 12,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/SunSVG.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/Document.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var themes = [
  { name: "garden", dark: !1 },
  { name: "dracula", dark: !0 },
  { name: "retro", dark: !1 },
  { name: "business", dark: !0 },
  { name: "lemonade", dark: !1 }
];
function Document({
  children,
  title
}) {
  let loaderData = useLoaderData(), fetcher = useFetcher(), [theme, setTheme] = useState(
    loaderData?.theme ? loaderData.theme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dracula" : "garden"
  );
  return /* @__PURE__ */ jsxDEV5("html", { lang: "en", "data-theme": theme, children: [
    /* @__PURE__ */ jsxDEV5("head", { children: [
      /* @__PURE__ */ jsxDEV5("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/Document.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/Document.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ jsxDEV5("title", { children: title }, void 0, !1, {
        fileName: "app/Document.tsx",
        lineNumber: 40,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ jsxDEV5(Meta, {}, void 0, !1, {
        fileName: "app/Document.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Links, {}, void 0, !1, {
        fileName: "app/Document.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/Document.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("body", { children: [
      /* @__PURE__ */ jsxDEV5("div", { className: "dropdown dropdown-end absolute top-8 right-8 z-20", children: [
        /* @__PURE__ */ jsxDEV5(
          "button",
          {
            name: "theme-picker",
            tabIndex: 0,
            className: "btn btn-ghost tooltip tooltip-left tooltip-primary normal-case font-normal",
            "data-tip": "Change Theme",
            children: /* @__PURE__ */ jsxDEV5(ThemeIcon, {}, void 0, !1, {
              fileName: "app/Document.tsx",
              lineNumber: 52,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/Document.tsx",
            lineNumber: 46,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ jsxDEV5(
          "ul",
          {
            tabIndex: 0,
            className: "dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52",
            children: themes.map((t) => /* @__PURE__ */ jsxDEV5("li", { children: /* @__PURE__ */ jsxDEV5(
              "button",
              {
                name: "set-theme",
                onClick: () => {
                  setTheme(t.name), fetcher.submit({ theme: t.name }, { method: "post" }), localStorage.setItem("theme", t.name), document.activeElement instanceof HTMLElement && document.activeElement.blur();
                },
                className: t.name === theme ? "bg-primary text-primary-content" : "",
                children: [
                  t.name[0].toUpperCase() + t.name.slice(1),
                  " ",
                  /* @__PURE__ */ jsxDEV5("span", { className: "ml-auto", children: t.dark ? /* @__PURE__ */ jsxDEV5(MoonSVG, { className: "w-5" }, void 0, !1, {
                    fileName: "app/Document.tsx",
                    lineNumber: 81,
                    columnNumber: 23
                  }, this) : /* @__PURE__ */ jsxDEV5(SunSVG, { className: "w-5" }, void 0, !1, {
                    fileName: "app/Document.tsx",
                    lineNumber: 83,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/Document.tsx",
                    lineNumber: 79,
                    columnNumber: 19
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/Document.tsx",
                lineNumber: 60,
                columnNumber: 17
              },
              this
            ) }, t.name, !1, {
              fileName: "app/Document.tsx",
              lineNumber: 59,
              columnNumber: 15
            }, this))
          },
          void 0,
          !1,
          {
            fileName: "app/Document.tsx",
            lineNumber: 54,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/Document.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      children
    ] }, void 0, !0, {
      fileName: "app/Document.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/Document.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/DocumentForBoundry.tsx
import { useEffect, useState as useState2 } from "react";
import { Links as Links2, Meta as Meta2 } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Document2({
  children,
  title
}) {
  let [theme, setTheme] = useState2("dracula");
  return useEffect(() => {
    let storedTheme = localStorage.getItem("theme");
    console.log(storedTheme), storedTheme && setTheme(storedTheme);
  }, []), /* @__PURE__ */ jsxDEV6("html", { lang: "en", "data-theme": theme, children: [
    /* @__PURE__ */ jsxDEV6("head", { children: [
      /* @__PURE__ */ jsxDEV6("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/DocumentForBoundry.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/DocumentForBoundry.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      title ? /* @__PURE__ */ jsxDEV6("title", { children: title }, void 0, !1, {
        fileName: "app/DocumentForBoundry.tsx",
        lineNumber: 27,
        columnNumber: 18
      }, this) : null,
      /* @__PURE__ */ jsxDEV6(Meta2, {}, void 0, !1, {
        fileName: "app/DocumentForBoundry.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6(Links2, {}, void 0, !1, {
        fileName: "app/DocumentForBoundry.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/DocumentForBoundry.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("body", { children }, void 0, !1, {
      fileName: "app/DocumentForBoundry.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/DocumentForBoundry.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/components/ErrorPage.tsx
import { Link } from "@remix-run/react";

// app/components/MainContent.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function MainContent({
  children,
  narrow = !1
}) {
  return /* @__PURE__ */ jsxDEV7("div", { className: "flex justify-center mb-20 min-h-[60vh]", children: /* @__PURE__ */ jsxDEV7(
    "main",
    {
      className: `container p-3 ${narrow ? "max-w-5xl" : "md:max-w-screen-lg"}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/MainContent.tsx",
      lineNumber: 13,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/MainContent.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/StackedWave.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
function StackedWave() {
  return /* @__PURE__ */ jsxDEV8(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 1920,
      height: 400,
      preserveAspectRatio: "none",
      className: "absolute overflow-hidden bottom-0 opacity-40",
      children: [
        /* @__PURE__ */ jsxDEV8("g", { mask: 'url("#a")', fill: "none", children: [
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M0 313C128 263.2 384 69 640 64s384 230.2 640 224c256-6.2 512-204 640-255v367H0z",
              className: "fill-base-200"
            },
            void 0,
            !1,
            {
              fileName: "app/components/StackedWave.tsx",
              lineNumber: 11,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M0 78c55 48.4 165 254 275 242S440 34.2 550 18C660 1.8 715 219.4 825 239c110 19.6 165-129.8 275-123 110 6.8 165 156 275 157s166-154.4 275-152c109 2.4 216 131.2 270 164v115H0z",
              className: "fill-base-300"
            },
            void 0,
            !1,
            {
              fileName: "app/components/StackedWave.tsx",
              lineNumber: 15,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M0 378c128-52.2 384-238.4 640-261 256-22.6 384 140.8 640 148 256 7.2 512-89.6 640-112v247H0z",
              className: "fill-secondary-focus"
            },
            void 0,
            !1,
            {
              fileName: "app/components/StackedWave.tsx",
              lineNumber: 19,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV8(
            "path",
            {
              d: "M0 89c96 50 288 248.4 480 250 192 1.6 288-219.2 480-242 192-22.8 288 124 480 128s384-86.4 480-108v283H0z",
              className: "fill-secondary"
            },
            void 0,
            !1,
            {
              fileName: "app/components/StackedWave.tsx",
              lineNumber: 23,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/StackedWave.tsx",
          lineNumber: 10,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8("defs", { children: /* @__PURE__ */ jsxDEV8("mask", { id: "a", children: /* @__PURE__ */ jsxDEV8("path", { d: "M0 0h1920v400H0z", className: "fill-base-100" }, void 0, !1, {
          fileName: "app/components/StackedWave.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/StackedWave.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/StackedWave.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/StackedWave.tsx",
      lineNumber: 3,
      columnNumber: 5
    },
    this
  );
}

// app/components/Header.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
function Header({ children }) {
  return /* @__PURE__ */ jsxDEV9("header", { className: "hero py-8 bg-gradient-to-tl from-base-300 to-base-200 relative min-h-[360px]", children: [
    /* @__PURE__ */ jsxDEV9(StackedWave, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV9("div", { className: "text-center hero-content flex content-center align-center", children }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/components/ErrorPage.tsx
import { Fragment, jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
function ErrorPage({
  message,
  children
}) {
  return /* @__PURE__ */ jsxDEV10(Fragment, { children: [
    /* @__PURE__ */ jsxDEV10(Header, { children: [
      /* @__PURE__ */ jsxDEV10("img", { src: "/broken-heart.svg", alt: "broken-heart", className: "w-20 h-20" }, void 0, !1, {
        fileName: "app/components/ErrorPage.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV10("h1", { className: "text-center text-4xl", children: "Oops! Something went wrong." }, void 0, !1, {
        fileName: "app/components/ErrorPage.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ErrorPage.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(MainContent, { children: /* @__PURE__ */ jsxDEV10("div", { className: "alert alert-warning shadow-xl flex flex-col my-8 py-8 max-w-xl m-auto", children: [
      message ? /* @__PURE__ */ jsxDEV10("h2", { className: "text-xl font-bold", children: message }, void 0, !1, {
        fileName: "app/components/ErrorPage.tsx",
        lineNumber: 20,
        columnNumber: 22
      }, this) : null,
      children || null,
      /* @__PURE__ */ jsxDEV10(Link, { to: "/", className: "btn shadow-xl", children: "I want to go home" }, void 0, !1, {
        fileName: "app/components/ErrorPage.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ErrorPage.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ErrorPage.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ErrorPage.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/cookies.ts
import { createCookie } from "@remix-run/node";
var themeCookie = createCookie("theme", {
  maxAge: 604800
  // one week
});

// app/root.tsx
import { json } from "@remix-run/node";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "icon", href: "/girl-icon.svg", type: "image/svg" }
], loader = async ({ request }) => {
  let cookieHeader = request.headers.get("Cookie"), cookie = await themeCookie.parse(cookieHeader) || {};
  return cookie.theme || (cookie.theme = "dracula"), cookie;
};
async function action({ request }) {
  let cookieHeader = request.headers.get("Cookie"), cookie = await themeCookie.parse(cookieHeader) || {}, bodyParams = await request.formData();
  return bodyParams.get("theme") && (cookie.theme = bodyParams.get("theme")), json(null, {
    headers: {
      "Set-Cookie": await themeCookie.serialize(cookie)
    }
  });
}
function App() {
  return /* @__PURE__ */ jsxDEV11(Document, { children: [
    /* @__PURE__ */ jsxDEV11(Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV11(LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 50
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? /* @__PURE__ */ jsxDEV11(Document2, { title: `Oops! ${error.status}`, children: [
    /* @__PURE__ */ jsxDEV11(ErrorPage, { message: `${error.status}  ${error.statusText}`, children: /* @__PURE__ */ jsxDEV11("p", { className: "text-lg", children: "I don't have a page for that" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 71,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11(Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) : error instanceof Error ? /* @__PURE__ */ jsxDEV11(Document2, { title: "Oh no!", children: [
    /* @__PURE__ */ jsxDEV11(ErrorPage, { message: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11(Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) : /* @__PURE__ */ jsxDEV11(Document2, { title: "Oh no!", children: [
    /* @__PURE__ */ jsxDEV11(ErrorPage, { message: "Unknown Error!" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV11(Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this);
}

// app/routes/category.$category.tsx
var category_category_exports = {};
__export(category_category_exports, {
  default: () => CategoryPage,
  loader: () => loader2,
  meta: () => meta
});
import { gql } from "graphql-request";
import { useLoaderData as useLoaderData2 } from "@remix-run/react";

// app/graphql/graphcms.server.ts
import dotenv from "dotenv";
import { GraphQLClient } from "graphql-request";
dotenv.config();
var graphcms = new GraphQLClient(
  `https://api-eu-west-2.graphcms.com/v2/${process.env.GRAPHCMS_PROJECT_ID}/master`
);

// app/components/HomeButton.tsx
import { Link as Link2 } from "@remix-run/react";
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
function HomeIcon() {
  return /* @__PURE__ */ jsxDEV12(
    "svg",
    {
      id: "home",
      viewBox: "0 0 72 72",
      xmlns: "http://www.w3.org/2000/svg",
      height: "40px",
      width: "40px",
      children: [
        /* @__PURE__ */ jsxDEV12("g", { id: "color", children: /* @__PURE__ */ jsxDEV12(
          "polygon",
          {
            fill: "#D0CFCE",
            stroke: "none",
            points: "17.1289,59.7384 16.0605,34.7399 16.0812,27.7956 36.1491,8.1103 55.9811,27.9203 55.9766,43.3584 55.0371,52.0185 54.9219,59.7384 41.7865,59.1623 41.8149,41.6273 30.2251,41.6273 30.149,59.1623"
          },
          void 0,
          !1,
          {
            fileName: "app/components/HomeButton.tsx",
            lineNumber: 32,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/HomeButton.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12("g", { id: "hair" }, void 0, !1, {
          fileName: "app/components/HomeButton.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12("g", { id: "skin" }, void 0, !1, {
          fileName: "app/components/HomeButton.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12("g", { id: "skin-shadow" }, void 0, !1, {
          fileName: "app/components/HomeButton.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV12("g", { id: "line", children: [
          /* @__PURE__ */ jsxDEV12(
            "path",
            {
              fill: "none",
              stroke: "#000000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              strokeWidth: "2",
              d: "M41.9901,59.9508H53.982c0.55,0,1-0.45,1-1v-24.938"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HomeButton.tsx",
              lineNumber: 42,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            "path",
            {
              fill: "none",
              stroke: "#000000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              strokeWidth: "2",
              d: "M17.058,34.0128v24.938c0,0.55,0.45,1,1,1h12.1346"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HomeButton.tsx",
              lineNumber: 51,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            "polyline",
            {
              fill: "none",
              stroke: "#000000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              strokeWidth: "2",
              points: "8.4925,35.5947 36.0155,7.9766 63.5958,35.3474"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HomeButton.tsx",
              lineNumber: 60,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ jsxDEV12(
            "polyline",
            {
              fill: "none",
              stroke: "#000000",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              strokeWidth: "2",
              points: "41.8149,59.9327 41.8149,41.6273 30.2251,41.6273 30.2251,59.9327"
            },
            void 0,
            !1,
            {
              fileName: "app/components/HomeButton.tsx",
              lineNumber: 69,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/HomeButton.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/HomeButton.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
function HomeButton() {
  return /* @__PURE__ */ jsxDEV12(
    "div",
    {
      className: "fixed top-4 left-4 z-30 tooltip tooltip-right tooltip-primary",
      "data-tip": "Home",
      children: /* @__PURE__ */ jsxDEV12(Link2, { to: "/", children: /* @__PURE__ */ jsxDEV12(
        "button",
        {
          className: "btn btn-ghost hover:scale-105 transition-transform",
          name: "home",
          children: /* @__PURE__ */ jsxDEV12(HomeIcon, {}, void 0, !1, {
            fileName: "app/components/HomeButton.tsx",
            lineNumber: 94,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/HomeButton.tsx",
          lineNumber: 90,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/HomeButton.tsx",
        lineNumber: 89,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/HomeButton.tsx",
      lineNumber: 85,
      columnNumber: 5
    },
    this
  );
}

// app/components/CategoryIcon.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var iconfile = {
  minecraft: "video-game",
  blender: "blender",
  story: "book-open",
  animation: "film-camera",
  youtube: "youtube",
  coding: "hacker-cat"
};
function CategoryIcon({ category }) {
  let file = category.toLowerCase();
  return iconfile[file] ? /* @__PURE__ */ jsxDEV13("img", { src: `/${iconfile[file]}.svg`, alt: "", className: "h-24 inline-block" }, void 0, !1, {
    fileName: "app/components/CategoryIcon.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this) : null;
}

// app/components/NoPostsToShow.tsx
import { Link as Link3 } from "@remix-run/react";
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
function NoPostsToShow({ category }) {
  return /* @__PURE__ */ jsxDEV14("div", { className: "alert alert-warning shadow-xl flex flex-col my-8 py-8 max-w-lg m-auto", children: [
    /* @__PURE__ */ jsxDEV14("h2", { className: "text-center text-xl", children: [
      /* @__PURE__ */ jsxDEV14("img", { src: "/crying-cat.svg", alt: "broken-heart", className: "w-10 h-10" }, void 0, !1, {
        fileName: "app/components/NoPostsToShow.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      " ",
      "Oops!"
    ] }, void 0, !0, {
      fileName: "app/components/NoPostsToShow.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("p", { style: { display: "block" }, children: [
      "I haven't created any ",
      /* @__PURE__ */ jsxDEV14("strong", { children: category }, void 0, !1, {
        fileName: "app/components/NoPostsToShow.tsx",
        lineNumber: 11,
        columnNumber: 36
      }, this),
      " posts as yet!"
    ] }, void 0, !0, {
      fileName: "app/components/NoPostsToShow.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14("p", { className: "text-center", children: "Please try another category." }, void 0, !1, {
      fileName: "app/components/NoPostsToShow.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV14(Link3, { to: "/", className: "btn shadow-xl", children: "Take Me Back" }, void 0, !1, {
      fileName: "app/components/NoPostsToShow.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NoPostsToShow.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
import { Link as Link4 } from "@remix-run/react";
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
function Footer({
  author,
  categories
}) {
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxDEV15("footer", { className: "footer p-10 text-base-content bg-gradient-to-br from-base-300 to-base-100", children: [
    /* @__PURE__ */ jsxDEV15("div", { className: "w-full h-full", children: [
      /* @__PURE__ */ jsxDEV15(Link4, { to: "/", className: "avatar m-auto", children: /* @__PURE__ */ jsxDEV15("div", { className: "w-20 rounded-full ring ring-primary", children: /* @__PURE__ */ jsxDEV15("img", { src: author.picture.url, alt: author.name }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 17,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV15("p", { className: "text-center w-full", children: [
        "All content \xA9 ",
        author.name,
        " ",
        year
      ] }, void 0, !0, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", { children: [
      /* @__PURE__ */ jsxDEV15("span", { className: "footer-title", children: "Post Categories" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      categories.map((category) => /* @__PURE__ */ jsxDEV15(
        Link4,
        {
          to: `/category/${category.slug}`,
          className: "link link-hover",
          children: category.title
        },
        category.id,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 27,
          columnNumber: 11
        },
        this
      ))
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV15("div", {}, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/PostsGrid.tsx
import { Link as Link5 } from "@remix-run/react";

// app/utils.ts
function trimText(text, length = 20) {
  return text.replace(/[0-9]\\n|\\n|\/\/|\n/gi, " ").replace(/\s+/g, " ").split(" ").slice(0, length).join(" ").trim();
}
var dateFormatter = new Intl.DateTimeFormat("en-GB", { dateStyle: "long" });
function formatDate(dateStr) {
  let formattedDate = dateFormatter.format(new Date(dateStr)), [day, ...rest] = formattedDate.split(" "), lastNum = day[day.length - 1];
  return [`${day}${lastNum === "1" ? "st" : lastNum === "2" ? "nd" : lastNum === "3" ? "rd" : "th"}`, ...rest].join(" ");
}
function lessThanNdaysOld(dateStr, n = 30) {
  let today = (/* @__PURE__ */ new Date()).getTime(), dateToCheck = new Date(dateStr).getTime();
  return Math.abs(dateToCheck - today) / (24 * 60 * 60 * 1e3) < n;
}
function nearestAspectRatio(width, height, maxWidth = 16, maxHeight = 16) {
  let needsRotation = width > height;
  if (needsRotation) {
    let temp = width;
    width = height, height = temp;
  }
  let absoluteRatio = width / height, normalRatio = [1, 1], ratio = 1;
  for (let i = 1; i <= maxHeight; i++)
    for (let j = 1; j <= maxWidth; j++) {
      let value = j / i;
      Math.abs(value - absoluteRatio) < Math.abs(ratio - absoluteRatio) && (ratio = value, normalRatio = [j, i]);
    }
  return (needsRotation ? normalRatio.reverse() : normalRatio).join("/");
}

// app/components/Picture.tsx
import { useState as useState3, useEffect as useEffect2 } from "react";
import { jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  let [src, setSrc] = useState3(lowQualitySrc);
  return useEffect2(() => {
    if (src === lowQualitySrc) {
      let img = new Image();
      img.onload = () => {
        img.complete && setSrc(highQualitySrc);
      }, img.src = highQualitySrc;
    }
  }, [lowQualitySrc, highQualitySrc, src]), [src, { blur: src === lowQualitySrc }];
};
function Picture({
  blurUp = !0,
  smallSrc,
  largeSrc,
  alt,
  className,
  aspectRatio = "16/9"
}) {
  let [src, { blur }] = useProgressiveImg(smallSrc, largeSrc), aspectWidth, aspectHeight;
  if (typeof aspectRatio == "string") {
    let ratios = aspectRatio.split("/").map((str) => parseInt(str));
    aspectWidth = ratios[0], aspectHeight = ratios[1];
  } else
    aspectWidth = aspectRatio.width, aspectHeight = aspectRatio.height;
  return /* @__PURE__ */ jsxDEV16(
    "figure",
    {
      style: {
        aspectRatio: `${aspectWidth}/${aspectHeight}`,
        maxHeight: "80vh",
        margin: "auto"
      },
      className: blur && blurUp ? "animate-pulse" : "",
      children: /* @__PURE__ */ jsxDEV16(
        "img",
        {
          loading: "lazy",
          onContextMenu: (event) => event.preventDefault(),
          src,
          style: {
            transform: "translateZ(0)",
            backfaceVisibility: "hidden",
            width: "100%",
            filter: blur && blurUp ? "blur(10px)" : "none",
            transition: blur && blurUp ? "none" : "filter 0.2s ease-out",
            objectFit: "cover",
            overflow: "hidden"
          },
          alt: blur ? "" : alt,
          className
        },
        void 0,
        !1,
        {
          fileName: "app/components/Picture.tsx",
          lineNumber: 78,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Picture.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}

// app/components/PostsGrid.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
function PostsGrid({
  posts
}) {
  return /* @__PURE__ */ jsxDEV17("section", { className: "grid justify-items-center gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-5", children: posts.map((post) => /* @__PURE__ */ jsxDEV17("div", { className: "h-full relative group w-full", children: [
    /* @__PURE__ */ jsxDEV17("div", { className: "absolute bg-gradient-to-br from-primary via-accent to-primary -z-0 w-[calc(100%+8px)] h-[calc(100%+8px)] top-[-4px] left-[-4px] card opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, void 0, !1, {
      fileName: "app/components/PostsGrid.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV17("article", { className: "card overflow-hidden bg-base-100 shadow-lg max-w-lg group relative z-10 h-full", children: [
      /* @__PURE__ */ jsxDEV17(Link5, { to: `/${post.slug}`, children: /* @__PURE__ */ jsxDEV17("div", { className: "overflow-hidden group-hover:opacity-80 transition-opacity ", children: /* @__PURE__ */ jsxDEV17(
        Picture,
        {
          largeSrc: post.previewImage.url,
          smallSrc: post.previewImage.small,
          alt: post.title,
          aspectRatio: "16/9"
        },
        void 0,
        !1,
        {
          fileName: "app/components/PostsGrid.tsx",
          lineNumber: 20,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/PostsGrid.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/PostsGrid.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV17("div", { className: "card-body justify-between p-0", children: [
        /* @__PURE__ */ jsxDEV17(Link5, { to: `/${post.slug}`, className: "p-6", children: [
          /* @__PURE__ */ jsxDEV17("span", { children: [
            formatDate(post.createdAt),
            " ",
            lessThanNdaysOld(post.createdAt, 14) ? /* @__PURE__ */ jsxDEV17("div", { className: "badge badge-secondary -translate-y-3 -rotate-6 group-hover:animate-pulse", children: "NEW" }, void 0, !1, {
              fileName: "app/components/PostsGrid.tsx",
              lineNumber: 33,
              columnNumber: 21
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/PostsGrid.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV17("h2", { className: "card-title group-hover:link decoration-2 decoration-primary my-3", children: post.title }, void 0, !1, {
            fileName: "app/components/PostsGrid.tsx",
            lineNumber: 38,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ jsxDEV17(
            "p",
            {
              style: { whiteSpace: "pre-wrap" },
              className: "text-sm my-2 line-clamp-3",
              children: trimText(post.content.text)
            },
            void 0,
            !1,
            {
              fileName: "app/components/PostsGrid.tsx",
              lineNumber: 41,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/PostsGrid.tsx",
          lineNumber: 29,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV17("div", { className: "card-actions justify-end pb-6 pl-6 pr-6", children: post.categories?.length > 0 ? post.categories.map((category) => /* @__PURE__ */ jsxDEV17(
          Link5,
          {
            to: `/category/${category.slug}`,
            className: "badge badge-outline hover:bg-info hover:text-info-content",
            children: category.title
          },
          category.id,
          !1,
          {
            fileName: "app/components/PostsGrid.tsx",
            lineNumber: 51,
            columnNumber: 23
          },
          this
        )) : null }, void 0, !1, {
          fileName: "app/components/PostsGrid.tsx",
          lineNumber: 48,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/PostsGrid.tsx",
        lineNumber: 28,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/PostsGrid.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this)
  ] }, post.id, !0, {
    fileName: "app/components/PostsGrid.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/PostsGrid.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/category.$category.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var query = gql`
  query CategoryPageQuery($category: String!, $authorId: ID!) {
    categories {
      id
      title
      slug
    }
    author(where: { id: $authorId }) {
      name
      title
      biography
      picture {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { height: 120, width: 120, fit: clip } }
          }
        )
      }
    }
    category(where: { slug: $category }) {
      title
    }
    posts(where: { categories_some: { slug: $category } }) {
      id
      slug
      title
      createdAt
      categories {
        id
        title
        slug
      }
      content {
        text
      }
      previewImage {
        id
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 288, width: 512 } }
          }
        )
        small: url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 9, width: 16 } }
          }
        )
        fileName
      }
    }
  }
`;
async function loader2({ params }) {
  let data = await graphcms.request(query, {
    category: params.category,
    authorId: process.env.AUTHOR_ID
  });
  if (!data.category)
    throw new Error(`No matching category for "${params.category}"`);
  return {
    posts: data.posts,
    category: data.category.title,
    author: data.author,
    categories: data.categories
  };
}
var meta = ({ data }) => {
  if (data)
    return [
      {
        title: `${data.author.name}'s ${data.category} posts`,
        "og:title": `${data.author.name}'s ${data.category} posts`
      }
    ];
  throw new Error("No Data");
};
function CategoryPage() {
  let { posts, category, categories, author } = useLoaderData2();
  return /* @__PURE__ */ jsxDEV18(Fragment2, { children: [
    /* @__PURE__ */ jsxDEV18(HomeButton, {}, void 0, !1, {
      fileName: "app/routes/category.$category.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(Header, { children: [
      /* @__PURE__ */ jsxDEV18(CategoryIcon, { category }, void 0, !1, {
        fileName: "app/routes/category.$category.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("h1", { className: "text-5xl inline-block", children: category }, void 0, !1, {
        fileName: "app/routes/category.$category.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/category.$category.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(MainContent, { children: [
      /* @__PURE__ */ jsxDEV18("h2", { className: "text-4xl pt-5", children: [
        category,
        " Posts"
      ] }, void 0, !0, {
        fileName: "app/routes/category.$category.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18("div", { className: "divider" }, void 0, !1, {
        fileName: "app/routes/category.$category.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      posts.length > 0 ? /* @__PURE__ */ jsxDEV18(PostsGrid, { posts }, void 0, !1, {
        fileName: "app/routes/category.$category.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV18(NoPostsToShow, { category }, void 0, !1, {
        fileName: "app/routes/category.$category.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/category.$category.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV18(Footer, { author, categories }, void 0, !1, {
      fileName: "app/routes/category.$category.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/category.$category.tsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta2
});
import { useLoaderData as useLoaderData3 } from "@remix-run/react";
import { gql as gql2 } from "graphql-request";

// app/components/Banner.tsx
import { useState as useState4 } from "react";
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var greetings = ["Hey there!", "Hi!", "Yep that's me!", "Hello!", "..."];
function randomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}
function Banner({ author }) {
  let [greeting, setGreeting] = useState4(greetings[0]);
  return /* @__PURE__ */ jsxDEV19(Header, { children: /* @__PURE__ */ jsxDEV19("div", { className: "max-w-md", children: [
    /* @__PURE__ */ jsxDEV19(
      "div",
      {
        className: "avatar tooltip tooltip-left tooltip-primary",
        "data-tip": greeting,
        onMouseLeave: () => {
          let timeoutId = setTimeout(() => {
            setGreeting(randomGreeting()), clearTimeout(timeoutId);
          }, 300);
        },
        children: /* @__PURE__ */ jsxDEV19("div", { className: "w-28 rounded-full ring ring-primary", children: /* @__PURE__ */ jsxDEV19("img", { src: author.picture?.url, alt: author.name }, void 0, !1, {
          fileName: "app/components/Banner.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Banner.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Banner.tsx",
        lineNumber: 16,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV19("h1", { className: "text-5xl", children: [
      "Hi I'm ",
      author.name
    ] }, void 0, !0, {
      fileName: "app/components/Banner.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19("p", { className: "pt-6 font-bold", children: [
      "A ",
      author.title
    ] }, void 0, !0, {
      fileName: "app/components/Banner.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV19("p", { className: "pb-6", children: author.biography }, void 0, !1, {
      fileName: "app/components/Banner.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Banner.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Banner.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// app/components/CategoryLinks.tsx
import { Link as Link6 } from "@remix-run/react";
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
function CategoryLinks({
  categories
}) {
  return /* @__PURE__ */ jsxDEV20("ul", { className: "flex flex-wrap", children: categories.map(({ id, title, slug }) => /* @__PURE__ */ jsxDEV20("li", { children: /* @__PURE__ */ jsxDEV20(Link6, { to: `category/${slug}`, children: /* @__PURE__ */ jsxDEV20("button", { className: "btn btn-ghost", name: slug, children: title }, void 0, !1, {
    fileName: "app/components/CategoryLinks.tsx",
    lineNumber: 14,
    columnNumber: 13
  }, this) }, id, !1, {
    fileName: "app/components/CategoryLinks.tsx",
    lineNumber: 13,
    columnNumber: 11
  }, this) }, id, !1, {
    fileName: "app/components/CategoryLinks.tsx",
    lineNumber: 12,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/components/CategoryLinks.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var query2 = gql2`
  query HomePageQuery($authorId: ID!) {
    categories {
      id
      title
      slug
    }
    author(where: { id: $authorId }) {
      name
      title
      biography
      picture {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { height: 120, width: 120, fit: clip } }
          }
        )
      }
    }
    posts(orderBy: createdAt_DESC) {
      id
      title
      slug
      createdAt
      categories {
        id
        title
        slug
      }
      content {
        text
      }
      previewImage {
        fileName
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 288, width: 512 } }
          }
        )
        small: url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 9, width: 16 } }
          }
        )
      }
    }
  }
`;
async function loader3() {
  let data = await graphcms.request(query2, {
    authorId: process.env.AUTHOR_ID
  });
  if (data)
    return data;
  throw new Error("Something went wrong with fetching from CMS");
}
var meta2 = ({ data }) => {
  if (data && data.author)
    return [
      {
        title: `${data.author.name}'s blog site`,
        "og:title": `${data.author.name}'s blog site`,
        "og:image": data.author.picture.url,
        "og:description": data.author.title
      }
    ];
  throw new Error("No Data");
};
function Index() {
  let { categories, author, posts } = useLoaderData3();
  return /* @__PURE__ */ jsxDEV21(Fragment3, { children: [
    /* @__PURE__ */ jsxDEV21(Banner, { author }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(MainContent, { children: [
      /* @__PURE__ */ jsxDEV21("h2", { className: "text-4xl pt-5", children: "Posts" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21("div", { className: "divider" }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21(CategoryLinks, { categories }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV21(PostsGrid, { posts }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV21(Footer, { author, categories }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 101,
    columnNumber: 5
  }, this);
}

// app/routes/$post.tsx
var post_exports = {};
__export(post_exports, {
  default: () => PostPage,
  links: () => links2,
  loader: () => loader4,
  meta: () => meta3
});
import { gql as gql3 } from "graphql-request";
import { useLoaderData as useLoaderData4 } from "@remix-run/react";

// app/styles/postpage.css
var postpage_default = "/build/_assets/postpage-JQI7L3ON.css";

// app/components/RichTextRenderer.tsx
import { RichText } from "@graphcms/rich-text-react-renderer";
import { ClientOnly } from "remix-utils/client-only";
import * as React from "react";
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var ThreeScene2 = React.lazy(() => Promise.resolve().then(() => (init_ThreeScene(), ThreeScene_exports)));
function RichTextRenderer({
  content
}) {
  return /* @__PURE__ */ jsxDEV23(
    RichText,
    {
      content: content.json,
      references: content.references,
      renderers: {
        h1: ({ children }) => /* @__PURE__ */ jsxDEV23("h1", { className: "text-5xl py-2 font-bold", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        h2: ({ children }) => /* @__PURE__ */ jsxDEV23("h2", { className: "text-4xl py-2 font-bold", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        h3: ({ children }) => /* @__PURE__ */ jsxDEV23("h3", { className: "text-3xl py-2 font-bold", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 35,
          columnNumber: 9
        }, this),
        p: ({ children }) => /* @__PURE__ */ jsxDEV23("p", { className: "py-2", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 37,
          columnNumber: 30
        }, this),
        ol: ({ children }) => /* @__PURE__ */ jsxDEV23("ol", { className: "list-decimal list-inside", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this),
        ul: ({ children }) => /* @__PURE__ */ jsxDEV23("ul", { className: "list-disc list-inside", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        blockquote: ({ children }) => /* @__PURE__ */ jsxDEV23("blockquote", { className: "border-l-4 border-info px-2 py-3 my-3 text-info-content bg-info rounded-box bg-opacity-20 border-opacity-20", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 45,
          columnNumber: 9
        }, this),
        code_block: ({ children }) => /* @__PURE__ */ jsxDEV23("div", { className: "mockup-code rounded-box font-mono", children: /* @__PURE__ */ jsxDEV23("pre", { className: "no-before pl-5", children }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this),
        a: ({ children, openInNewTab, title, ...rest }) => /* @__PURE__ */ jsxDEV23(
          "a",
          {
            target: openInNewTab ? "_blank" : "_self",
            ...rest,
            className: `link link-hover link-primary font-bold ${title ? "tooltip tooltip-primary" : null}`,
            "data-tip": title,
            children
          },
          void 0,
          !1,
          {
            fileName: "app/components/RichTextRenderer.tsx",
            lineNumber: 57,
            columnNumber: 9
          },
          this
        ),
        img: ({ title, altText, handle, width, height }) => /* @__PURE__ */ jsxDEV23("div", { style: { maxWidth: "800px" }, className: "mx-auto my-3", children: width && height ? /* @__PURE__ */ jsxDEV23(
          Picture,
          {
            smallSrc: `https://media.graphassets.com/resize=fit:crop,width:16/output=format:webp/${handle}`,
            largeSrc: `https://media.graphassets.com/resize=fit:crop,${width > height ? "width:800" : "height:800"}/output=format:webp/${handle}`,
            alt: altText || title,
            className: "m-auto rounded-box max-w-full shadow-xl shadow-base-300",
            aspectRatio: nearestAspectRatio(width, height)
          },
          void 0,
          !1,
          {
            fileName: "app/components/RichTextRenderer.tsx",
            lineNumber: 71,
            columnNumber: 11
          },
          this
        ) : /* @__PURE__ */ jsxDEV23(
          "img",
          {
            src: `https://media.graphassets.com/resize=fit:crop,width:800/output=format:webp/${handle}`,
            alt: altText || title
          },
          void 0,
          !1,
          {
            fileName: "app/components/RichTextRenderer.tsx",
            lineNumber: 82,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/RichTextRenderer.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this),
        embed: {
          Video: ({ nodeId }) => {
            let video = content.references.find((ref) => ref.id === nodeId);
            if (!video)
              return /* @__PURE__ */ jsxDEV23("div", { className: "alert alert-error shadow-xl", children: /* @__PURE__ */ jsxDEV23("p", { children: "There should be a video here but something went wrong!" }, void 0, !1, {
                fileName: "app/components/RichTextRenderer.tsx",
                lineNumber: 95,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/components/RichTextRenderer.tsx",
                lineNumber: 94,
                columnNumber: 15
              }, this);
            let videoId = video.youTubeShareUrl.split("/").reverse()[0];
            return /* @__PURE__ */ jsxDEV23("div", { className: "max-w-[800px] mx-auto my-3", children: /* @__PURE__ */ jsxDEV23("div", { className: "w-full aspect-video", children: /* @__PURE__ */ jsxDEV23(
              "iframe",
              {
                loading: "lazy",
                src: `https://www.youtube.com/embed/${videoId}`,
                title: "YouTube video player",
                frameBorder: "0",
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                className: "m-auto rounded-box w-full h-full"
              },
              void 0,
              !1,
              {
                fileName: "app/components/RichTextRenderer.tsx",
                lineNumber: 103,
                columnNumber: 19
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/RichTextRenderer.tsx",
              lineNumber: 102,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/RichTextRenderer.tsx",
              lineNumber: 101,
              columnNumber: 15
            }, this);
          },
          BlenderModel: ({ nodeId }) => {
            let bModel = content.references.find((ref) => ref.id === nodeId), { glbFile, backgroundColour, title } = bModel;
            return /* @__PURE__ */ jsxDEV23(
              ClientOnly,
              {
                fallback: /* @__PURE__ */ jsxDEV23(
                  "div",
                  {
                    className: "animate-pulse",
                    style: {
                      backgroundColor: backgroundColour.css,
                      width: "100%",
                      aspectRatio: "16/9"
                    },
                    children: /* @__PURE__ */ jsxDEV23("div", { className: "text-center h-full w-full flex items-center justify-center", children: /* @__PURE__ */ jsxDEV23("h3", { className: "text-lg h-12", children: [
                      "Loading ",
                      title,
                      "..."
                    ] }, void 0, !0, {
                      fileName: "app/components/RichTextRenderer.tsx",
                      lineNumber: 131,
                      columnNumber: 23
                    }, this) }, void 0, !1, {
                      fileName: "app/components/RichTextRenderer.tsx",
                      lineNumber: 130,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/RichTextRenderer.tsx",
                    lineNumber: 122,
                    columnNumber: 17
                  },
                  this
                ),
                children: () => /* @__PURE__ */ jsxDEV23(
                  ThreeScene2,
                  {
                    glbFileUrl: glbFile.url,
                    bgColour: backgroundColour.css
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/RichTextRenderer.tsx",
                    lineNumber: 137,
                    columnNumber: 17
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/components/RichTextRenderer.tsx",
                lineNumber: 120,
                columnNumber: 15
              },
              this
            );
          }
        }
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/RichTextRenderer.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}

// app/routes/$post.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var pageQuery = gql3`
  query PostPageQuery($slug: String!, $authorId: ID!) {
    categories {
      id
      title
      slug
    }
    author(where: { id: $authorId }) {
      name
      title
      biography
      picture {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { height: 120, width: 120, fit: clip } }
          }
        )
      }
    }
    post(where: { slug: $slug }) {
      id
      categories {
        id
        slug
        title
      }
      coverImage {
        fileName
        height
        width
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, width: 1000 } }
            validateOptions: true
          }
        )
        small: url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: clip, width: 16 } }
            validateOptions: true
          }
        )
      }
      previewImage {
        fileName
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, width: 200 } }
          }
        )
      }
      title
      publishedAt
      content {
        text
        json
        references {
          ... on Video {
            id
            youTubeShareUrl
          }
          ... on BlenderModel {
            backgroundColour {
              css
            }
            id
            title
            glbFile {
              url
            }
          }
        }
      }
    }
  }
`;
async function loader4({ params }) {
  let data = await graphcms.request(pageQuery, {
    slug: params.post,
    authorId: process.env.AUTHOR_ID
  });
  if (data)
    return data;
  throw new Error(`No posts found for "${params.post}"`);
}
var links2 = () => [
  {
    rel: "stylesheet",
    href: postpage_default
  }
], meta3 = ({ data }) => {
  if (data && data.post)
    return [
      {
        title: data.post.title,
        "og:title": data.post.title,
        "og:image": data.post.previewImage.url,
        "og:description": trimText(data.post.content.text)
      }
    ];
  throw new Error("No Data");
};
function PostPage() {
  let { post, author, categories } = useLoaderData4(), coverImageAspectRatio = null;
  return post.coverImage && (coverImageAspectRatio = post.coverImage.width && post.coverImage.height ? nearestAspectRatio(post.coverImage.width, post.coverImage.height) : "16/9"), /* @__PURE__ */ jsxDEV24(Fragment4, { children: [
    /* @__PURE__ */ jsxDEV24(HomeButton, {}, void 0, !1, {
      fileName: "app/routes/$post.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(Header, { children: /* @__PURE__ */ jsxDEV24("h1", { className: "text-5xl inline-block", children: post.title }, void 0, !1, {
      fileName: "app/routes/$post.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$post.tsx",
      lineNumber: 158,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24("div", { className: "border-0 border-transparent m-auto max-w-[1000px] overflow-hidden lg:rounded-box -translate-y-20 bg-base-300 shadow-base-300 shadow-xl", children: post.coverImage && coverImageAspectRatio ? /* @__PURE__ */ jsxDEV24(
      Picture,
      {
        smallSrc: post.coverImage.small,
        largeSrc: post.coverImage.url,
        alt: post.coverImage.fileName,
        aspectRatio: coverImageAspectRatio
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$post.tsx",
        lineNumber: 163,
        columnNumber: 9
      },
      this
    ) : null }, void 0, !1, {
      fileName: "app/routes/$post.tsx",
      lineNumber: 161,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(MainContent, { narrow: !0, children: /* @__PURE__ */ jsxDEV24(RichTextRenderer, { content: post.content }, void 0, !1, {
      fileName: "app/routes/$post.tsx",
      lineNumber: 172,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/$post.tsx",
      lineNumber: 171,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV24(Footer, { author, categories }, void 0, !1, {
      fileName: "app/routes/$post.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$post.tsx",
    lineNumber: 156,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-OJMGUJQJ.js", imports: ["/build/_shared/chunk-BA6NHEY4.js", "/build/_shared/chunk-H5ZE7JVG.js", "/build/_shared/chunk-EH6U3DQH.js", "/build/_shared/chunk-NRH5LTJ7.js", "/build/_shared/chunk-O4OKU2LD.js", "/build/_shared/chunk-K4BO3OBJ.js", "/build/_shared/chunk-K6PKGSTD.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-ZWMORCEF.js", imports: ["/build/_shared/chunk-YVLWG3O5.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !0 }, "routes/$post": { id: "routes/$post", parentId: "root", path: ":post", index: void 0, caseSensitive: void 0, module: "/build/routes/$post-J3SHVAD6.js", imports: ["/build/_shared/chunk-I6QSU6FF.js", "/build/_shared/chunk-E77M6JUI.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-Y37B6L5A.js", imports: ["/build/_shared/chunk-YDG3AJFQ.js", "/build/_shared/chunk-E77M6JUI.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/category.$category": { id: "routes/category.$category", parentId: "root", path: "category/:category", index: void 0, caseSensitive: void 0, module: "/build/routes/category.$category-PYVKEAVD.js", imports: ["/build/_shared/chunk-YDG3AJFQ.js", "/build/_shared/chunk-I6QSU6FF.js", "/build/_shared/chunk-E77M6JUI.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "13e6a956", hmr: { runtime: "/build/_shared/chunk-K4BO3OBJ.js", timestamp: 1695465850106 }, url: "/build/manifest-13E6A956.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/category.$category": {
    id: "routes/category.$category",
    parentId: "root",
    path: "category/:category",
    index: void 0,
    caseSensitive: void 0,
    module: category_category_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$post": {
    id: "routes/$post",
    parentId: "root",
    path: ":post",
    index: void 0,
    caseSensitive: void 0,
    module: post_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
