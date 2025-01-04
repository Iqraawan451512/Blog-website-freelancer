import React, { useState, useEffect } from "react";

const CommentSection = () => {
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
    <div className="max-w-[30rem] mx-auto p-6  rounded-lg shadow-slate-50 shadow-lg">
      <p className="text-[1rem]  mt-[2rem] font-semibold text-center mb-4 text-[#5c5b64]">
        Please do comment about my Efforts <br />
        your views are more appreciated
      </p>
      <h2 className="text-2xl font-semibold text-center mb-4 text-[#2c2356] font-serif">Comments</h2>
      
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
              <p className="text-[#cacecf] hover:text-gray-950 ">{comment}</p>
            </div>
          ))
        )}
      </div>

      {/* Comment Input Area */}
      <div className="mt-6">
        <textarea
          className="w-[21rem] sm:w-[27rem] p-4 border-gray-300 bg-transparent shadow-lg text-gray-100 shadow-slate-300 border-[0.001rem] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          rows={4}
        ></textarea>
        
        <button
          onClick={handleCommentSubmit}
          className="mt-6 px-6 py-2 ml-[6rem] sm:ml-[10rem] bg-blue-950 text-white font-semibold rounded-lg hover:bg-slate-400 transition"
        >
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
