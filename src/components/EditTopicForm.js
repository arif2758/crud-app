"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        type="text"
        placeholder="Topic Title"
        className="border border-slate-500 px-8 py-2"
      />
      <input
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        type="text"
        placeholder="Topic Description"
        className="border border-slate-500 px-8 py-2"
      />
      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Topic
      </button>
    </form>
  );
}
