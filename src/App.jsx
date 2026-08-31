import Button from './ui/Button';
import Card from './ui/Card';
import Table from './ui/Table';
import Posts from './ui/Posts';

function App() {
  const handleSave = () => alert('تم الحفظ بنجاح!');
  const handleDelete = () => alert('تم الحذف!');
  const handleLearnMore = () => alert('تم الضغط على تفاصيل الدورة');

  const tableColumns = ["المعرف", "الاسم", "المهنة", "المدينة"];
  
  const tableData = [
    { id: 1, name: "أحمد علي", job: "مطور واجهات", city: "الرياض" },
    { id: 2, name: "سارة محمد", job: "مصممة واجهات", city: "جدة" },
    { id: 3, name: "خالد عمر", job: "مدير مشاريع", city: "الدمام" },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '20px', }}>
      
      <section style={{ display: 'flex', gap: '10px',  justifyContent:'center' }}>
        <Button 
          text="حفظ البيانات" 
          onClick={handleSave} 
          variant="primary" 
        />

        <Button 
          text="حذف الحساب" 
          onClick={handleDelete} 
          variant="danger" 
          disabled={true} 
        />
      </section>

      <hr style={{ width: '100%', border: '0.5px solid #eee' }} />

      {/* 2. قسم البطاقات */}
      <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap',justifyContent:'center' }}>
        
        <Card
          title="دورة تعلم React"
          description="تعلم كيفية بناء تطبيقات ويب حديثة وقابلة لإعادة الاستخدام من الصفر."
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10"
        >
          <Button 
            text="عرض التفاصيل" 
            onClick={handleLearnMore} 
            variant="primary" 
          />
        </Card>
      </section>

      <hr style={{ width: '100%', border: '0.5px solid #eee' }} />

      {/* 3. قسم الجدول */}
      <section>
        <h2 style={{ marginBottom: '15px' }}>قائمة المستخدمين</h2>
        <Table 
          columns={tableColumns} 
          data={tableData} 
          striped={true} 
        />
      </section>
    <Posts/>
    </div>
  );
}

export default App;