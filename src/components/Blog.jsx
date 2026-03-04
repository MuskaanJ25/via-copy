import React from 'react';

function Blog() {
  const blogPosts = [
    {
      date: 'January 23, 2026',
      author: 'Via Team',
      title: 'The Future of Autonomous Software Engineering',
      excerpt: 'Exploring how AI is transforming the way we build and ship software at scale, and why accuracy matters more than speed.'
    },
    {
      date: 'December 16, 2025',
      author: 'Ila Mathur and Shray Alag',
      title: 'Our Mission',
      excerpt: 'The new age of programming is ruled by ideas, not IDEs. Via exists to make software creation mobile, intent-first, and accessible.'
    }
  ];

  return (
    <div className="blog-card" style={{ marginTop: '56px', borderRadius: '28px', background: '#fff', boxShadow: '0 18px 50px rgba(10, 20, 40, 0.1)', padding: '44px 56px' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-5">
        <div>
          <div className="eyebrow mb-2">BLOG</div>
          <h2
            className="font-display mb-0"
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: '#0B0B0C',
              fontWeight: 800
            }}
          >
            From the Blog
          </h2>
        </div>
        <a
          href="#"
          className="text-decoration-none fw-semibold"
          style={{
            fontSize: '14px',
            color: '#111827'
          }}
        >
          All posts →
        </a>
      </div>

      {/* Blog List */}
      {blogPosts.map((post, index) => (
        <div key={index}>
          <div className="py-3" style={{ padding: '20px 0' }}>
            {/* Meta */}
            <div className="blog-meta" style={{ color: '#6B7280', fontSize: '13px', marginBottom: '8px' }}>
              {post.date} • {post.author}
            </div>

            {/* Title */}
            <h3
              className="blog-title"
              style={{
                color: '#111827',
                fontWeight: 800,
                fontSize: '21px',
                marginBottom: '8px'
              }}
            >
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="blog-excerpt mb-0" style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>
          </div>

          {/* Divider */}
          {index < blogPosts.length - 1 && (
            <hr
              style={{
                borderColor: '#E5E7EB',
                marginTop: '16px',
                marginBottom: '16px',
                opacity: 1
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Blog;