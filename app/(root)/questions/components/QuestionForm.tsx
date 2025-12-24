"use client";

import Button from "@/components/Button";
import Editor from "@/components/Editor";
import Input from "@/components/Input";
import TagCard from "@/components/TagCard";
import React, { useState } from "react";

function QuestionForm() {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState<string[]>(["react", "vue"]);
  const [newTag, setNewTag] = useState("");

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const cleaned = newTag.trim();
    if (!cleaned) return;

    const exists = tags.some((t) => t.toLowerCase() === cleaned.toLowerCase());
    if (exists) {
      alert("already added");
      return;
    }

    setTags([...tags, cleaned]);
    setNewTag("");
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Ask a new question
        </h1>
        <p className="mt-1 text-sm text-white/60">
          Provide a clear title, details, and tags so others can help faster.
        </p>
      </header>

      <div className="space-y-6">
        <Input label="Title" text="Describe your question in a short way.." />

        <Editor label="Any Question.. ?" value={value} onChange={setValue} />

        <div className="space-y-3">
          <Input
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyDown={handleEnterPress}
            label="Tags"
            text="Press Enter to add a tag"
          />

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <TagCard key={t} href="#">
                {t}
              </TagCard>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end pt-2">
          <Button variant="primary" className="w-auto rounded-full px-6">
            Create
          </Button>
        </div>
      </div>
    </section>
  );
}

export default QuestionForm;
