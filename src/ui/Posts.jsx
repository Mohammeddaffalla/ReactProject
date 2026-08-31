import { useQuery } from '@tanstack/react-query';

// 1. دالة جلب البيانات من الـ API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('حدث خطأ أثناء جلب البيانات');
  }
  return response.json();
};

function Posts() {
  // 2. استخدام useQuery لجلب البيانات وإدارة الحالات
  const { data: posts, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  // 3. التعامل مع حالة التحميل (Loading State)
  if (isLoading) {
    return (
      <div className="status-container">
        <div className="spinner"></div>
        <p>جاري تحميل المنشورات...</p>
      </div>
    );
  }

  // 4. التعامل مع حالة الخطأ (Error State)
  if (isError) {
    return (
      <div className="status-container error-message">
        <p>خطأ: {error.message}</p>
      </div>
    );
  }

  // 5. عرض المنشورات عند نجاح الجلب (Success State)
  return (
    <div className="posts-container">
      <h1 className="page-title">المنشورات (Posts)</h1>
      
      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;