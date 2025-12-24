"use client";

import React, { useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import Link from "@tiptap/extension-link";
import { BulletList, ListItem, OrderedList } from "@tiptap/extension-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

import { FaItalic, FaLink, FaList, FaCode } from "react-icons/fa";
import { GoListOrdered } from "react-icons/go";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { all, createLowlight } from "lowlight";
import "highlight.js/styles/github-dark.css";

const lowlight = createLowlight(all);
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

type ToolBtnProps = {
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
  label: string;
};

const ToolBtn = ({ onClick, active, children, label }: ToolBtnProps) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={label}
    title={label}
    className={[
      "inline-flex h-9 w-9 items-center justify-center rounded-xl",
      "text-white/80 transition",
      "hover:bg-white/10 hover:text-white",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main/40",
      active ? "bg-main/15 text-main ring-1 ring-main/30" : "bg-white/[0.04]",
    ].join(" ")}
  >
    {children}
  </button>
);

const Editir = ({
  value,
  label,
  onChange,
}: {
  value?: string;
  label?: string;
  onChange: (value: string) => void;
}) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[320px] rounded-2xl bg-card px-4 py-3 text-white outline-none " +
          "ring-1 ring-white/10 shadow-sm " +
          "focus-visible:ring-2 focus-visible:ring-main/40 " +
          "selection:bg-main/30",
      },
    },
    extensions: [
      StarterKit,
      Bold,
      Italic,
      BulletList,
      ListItem,
      OrderedList,
      Heading.configure({ levels: [1, 2, 3] }),
      CodeBlockLowlight.configure({ lowlight }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        isAllowedUri: (url: string, ctx) => {
          try {
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`${ctx.defaultProtocol}://${url}`);

            if (!ctx.defaultValidate(parsedUrl.href)) return false;

            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = parsedUrl.protocol.replace(":", "");
            if (disallowedProtocols.includes(protocol)) return false;

            const allowedProtocols = ctx.protocols.map((p) =>
              typeof p === "string" ? p : p.scheme
            );
            if (!allowedProtocols.includes(protocol)) return false;

            const disallowedDomains = [
              "example-phishing.com",
              "malicious-site.net",
            ];
            if (disallowedDomains.includes(parsedUrl.hostname)) return false;

            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: (url) => {
          try {
            const parsedUrl = url.includes(":")
              ? new URL(url)
              : new URL(`https://${url}`);

            const disallowedDomains = [
              "example-no-autolink.com",
              "another-no-autolink.com",
            ];
            return !disallowedDomains.includes(parsedUrl.hostname);
          } catch {
            return false;
          }
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    immediatelyRender: false,
  });

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) return;

    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    try {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  }, [editor]);

  return (
    <>
      {label && (
        <label className="mb-2 block text-sm font-medium text-white/80">
          {label}
        </label>
      )}

      <div className="rounded-2xl bg-secondary ring-1 ring-white/10 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 rounded-t-2xl border-b border-white/10 bg-primary/40 p-3">
          <ToolBtn
            label="Bold"
            onClick={() => editor?.chain().focus().toggleBold().run()}
            active={!!editor?.isActive("bold")}
          >
            <span className="font-extrabold">B</span>
          </ToolBtn>

          <ToolBtn
            label="Italic"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            active={!!editor?.isActive("italic")}
          >
            <FaItalic />
          </ToolBtn>

          <div className="mx-1 h-6 w-px bg-white/10" />

          <ToolBtn
            label="Heading 1"
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 1 }).run()
            }
            active={!!editor?.isActive("heading", { level: 1 })}
          >
            <span className="text-xs font-bold">H1</span>
          </ToolBtn>

          <ToolBtn
            label="Heading 2"
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 2 }).run()
            }
            active={!!editor?.isActive("heading", { level: 2 })}
          >
            <span className="text-xs font-bold">H2</span>
          </ToolBtn>

          <ToolBtn
            label="Heading 3"
            onClick={() =>
              editor?.chain().focus().toggleHeading({ level: 3 }).run()
            }
            active={!!editor?.isActive("heading", { level: 3 })}
          >
            <span className="text-xs font-bold">H3</span>
          </ToolBtn>

          <div className="mx-1 h-6 w-px bg-white/10" />

          <ToolBtn
            label="Link"
            onClick={setLink}
            active={!!editor?.isActive("link")}
          >
            <FaLink />
          </ToolBtn>

          <ToolBtn
            label="Bulleted list"
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            active={!!editor?.isActive("bulletList")}
          >
            <FaList />
          </ToolBtn>

          <ToolBtn
            label="Ordered list"
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            active={!!editor?.isActive("orderedList")}
          >
            <GoListOrdered />
          </ToolBtn>

          <ToolBtn
            label="Code block"
            onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
            active={!!editor?.isActive("codeBlock")}
          >
            <FaCode />
          </ToolBtn>
        </div>

        <div className="p-3">
          <EditorContent editor={editor} />
        </div>
      </div>
    </>
  );
};

export default Editir;
