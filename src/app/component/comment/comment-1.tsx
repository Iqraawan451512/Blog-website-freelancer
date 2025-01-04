import React, { useState, useEffect } from "react";

const CommentSection_1 = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Fetch comments from local storage when the component mounts
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Handle comment submit
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem("comments", JSON.stringify(updatedComments));
      setNewComment(""); // Clear input field after posting
    }
  };

  return (
    <div className="max-w-[30rem] mx-auto p-6 bg-transparent rounded-lg shadow-slate-50 shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4 text-[#ede0d4]">Comments</h2>
      
      {/* Display Comments */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <p className="text-gray-100">No comments yet.</p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className="p-4 border-[0.001rem] rounded-lg shadow-lg hover:text-gray-100 shadow-slate-300 hover:bg-gray-200 transition"
            >
              <p className="text-[#cacecf] hover:text-gray-950">{comment}</p>
            </div>
          ))
        )}
      </div>

      {/* Comment Input Area */}
      <div className="mt-6">
        <textarea
          className="w-[19rem] sm:w-[27rem] p-4 border-gray-300 bg-transparent shadow-lg text-gray-100 shadow-slate-300 border-[0.001rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          rows={4}
        ></textarea>
        
        <button
          onClick={handleCommentSubmit}
          className="mt-6 px-6 py-2 ml-[5rem] sm:ml-[10rem] bg-slate-400 text-white font-semibold rounded-lg hover:bg-blue-950 transition"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection_1;
