export const Content = [
  { 
    question: '1. HTML dosyası içerisine js çağırma yöntemleri nelerdir ve nerede çağırmalıyız?',
    answer: (
      <>
        <p>1. External (Harici) JavaScript Dosyası Çağırma: JavaScript kodu harici bir dosyada (dosya.js) saklanır ve HTML dosyasında <code>&lt;script src="dosya.js"&gt;&lt;/script&gt;</code> şeklinde çağrılır. Bu yöntem, kodu ayrı dosyalarda tutarak kodunuzu düzenli tutmanızı ve tekrar kullanılabilir hale getirir.</p>
        <p>2. Internal (Dahili) JavaScript Kodu Kullanma: JavaScript kodu doğrudan HTML dosyasında <code>&lt;script&gt; JavaScript kodu &lt;/script&gt;</code> şeklinde içe alınır. Bu yöntem genellikle küçük işlemler için tercih edilir ve kodunuzu daha küçük projelerde hızlı bir şekilde yazmanıza olanak tanır.</p>
        <p>3. Inline JavaScript Kodu Kullanma: JavaScript kodu HTML elementlerinin içinde doğrudan <code>onclick</code>, <code>onload</code> gibi özelliklerde veya <code>href</code> veya <code>src</code> gibi attribute'lerde yazılabilir. Ancak bu yöntem, kodunuzun karmaşık hale gelmesine ve bakımının zorlaşmasına neden olabilir, bu yüzden genellikle kaçınılması önerilir.</p>
      </>
    )
  },
  { 
    question: '2. Semantik HTML nedir?', 
    answer: (
      <>
        <p>Semantik HTML, bir sayfadaki farklı bölümlerin (başlık, paragraf, liste, menü vb.) anlamını belirtir. Bu, hem insanlar hem de tarayıcılar için içeriğin daha iyi anlaşılmasını sağlar. Semantik HTML, HTML\'in içeriğin anlamını tanımlamak için kullanılması anlamına gelir. Bu, HTML kodunun, içeriğin doğası ve yapısı hakkında bilgi veren etiketler kullanarak organize edilmesi anlamına gelir. Örneğin, bir başlık için <code>&lt;h1&gt;</code>, bir paragraf için <code>&lt;p&gt;</code>, bir liste için <code>&lt;ul&gt;</code> veya <code>&lt;ol&gt;</code> gibi etiketler kullanmak semantik HTML\'in bir örneğidir. Semantik HTML kullanmak, hem insanlar hem de arama motorları için içeriğin daha iyi anlaşılmasını sağlar, erişilebilirliği artırır ve kodun bakımını kolaylaştırır.</p>
      </>
    )
  },
  { 
    question: '3. HTML 5 ile gelen en çok kullanılan HTML etiketleri nelerdir?', 
    answer: (
      <>
        <p>HTML5, önceki HTML sürümlerine kıyasla birçok yeni semantik etiket eklemiştir. İşte HTML5'in önemli semantik etiketlerinden bazıları:</p>
        <ul>
          <li><code>&lt;header&gt;</code>: Bir belgenin veya bölmenin başlığını tanımlar.</li>
          <li><code>&lt;footer&gt;</code>: Bir belgenin veya bölmenin alt bilgisini tanımlar.</li>
          <li><code>&lt;nav&gt;</code>: Bir belgenin veya bölmenin gezinme bağlantılarını içerir.</li>
          <li><code>&lt;article&gt;</code>: Bağımsız, özgün içerik parçalarını tanımlar.</li>
          <li><code>&lt;section&gt;</code>: Bir belgenin veya bölmenin genel bir bölümünü tanımlar.</li>
          <li><code>&lt;aside&gt;</code>: Bir belge içinde yan içerik veya bağlantıları tanımlar.</li>
          <li><code>&lt;main&gt;</code>: Bir belgenin veya bölmenin ana içeriğini tanımlar.</li>
          <li><code>&lt;figure&gt;</code>: Bir resim, diyagram, fotoğraf, kod vb. ile ilişkili içeriği gruplar.</li>
          <li><code>&lt;figcaption&gt;</code>: <code>&lt;figure&gt;</code> öğesinin açıklamasını tanımlar.</li>
          <li><code>&lt;time&gt;</code>: Belirli bir tarih veya zamanı temsil eder.</li>
        </ul>
        <p>Bu semantik etiketler, HTML belgelerinin yapısını daha açık ve anlaşılır hale getirir ve içeriğin anlamını daha iyi ifade etmeye yardımcı olur.</p>
      </>
    )
  },
  { 
    question :" 4. JavaScript’te hangi veri tipleri kullanılır?",
    answer : (
      <>
        <p>Evet, tabii ki! JavaScript veri tiplerini iki ana kategoriye ayırabiliriz: ilkel (primitive) veri tipleri ve ilkel olmayan (non-primitive) veri tipleri (ya da referans tipleri).</p>
        <p><strong>İlkel (Primitive) Veri Tipleri:</strong></p>
        <ul>
          <li><strong>String:</strong> Metin verilerini temsil eder.</li>
          <li><strong>Number:</strong> Sayısal verileri temsil eder.</li>
          <li><strong>Boolean:</strong> Mantıksal değerleri temsil eder.</li>
          <li><strong>Undefined:</strong> Tanımsız (undefined) değeri temsil eder.</li>
          <li><strong>Null:</strong> Boş (null) değeri temsil eder.</li>
          <li><strong>Symbol:</strong> Benzersiz (unique) ve değiştirilemez (immutable) değerler oluşturmak için kullanılır (ECMAScript 6 ile eklenmiştir).</li>
        </ul>
        <p>Bu ilkel veri tipleri, değerlerin bellekte sabit bir boyutta saklandığı ve doğrudan erişilebileceği veri türleridir. Bu nedenle "ilkel" olarak adlandırılırlar.</p>
        <p><strong>İlkel Olmayan (Non-Primitive veya Referans) Veri Tipleri:</strong></p>
        <ul>
          <li><strong>Object:</strong> Karmaşık veri ve yapıları temsil eder. Nesneler, anahtar-değer çiftlerinden oluşan koleksiyonlardır.</li>
          <li><strong>Array:</strong> Birçok veriyi içeren sıralı bir koleksiyonu temsil eder.</li>
          <li><strong>Function:</strong> Bir işlevi temsil eder.</li>
          <li><strong>Date:</strong> Tarih ve zamanı temsil eder.</li>
          <li><strong>RegExp:</strong> Bir regular expression (düzenli ifade) objesini temsil eder.</li>
          <li><strong>Ve daha fazlası...</strong></li>
        </ul>
        <p>Bu veri tipleri, aslında bellekte bir adresi (yeri) gösterirler ve bu adrese bağlı olarak veriye erişilir. Dolayısıyla, "referans" olarak adlandırılırlar çünkü gerçek veri değerlerine referanslar üzerinden erişilirler.</p>
        <p>İlkel veri tipleri doğrudan değerlerdir, yani bellekte doğrudan saklanır ve kopyalanırken değerleri kopyalanır. İlkel olmayan veri tipleri ise referanslar üzerinden işaret edilen veri yapılarıdır, bu nedenle bir değişken diğer bir değişkene atanırken, yalnızca referans kopyalanır ve aynı veriyi işaret ederler. Bu önemli bir farklılıktır, çünkü ilkel olmayan veri tipleri arasında bir değişiklik yapılırsa, diğer ilgili değişkenler de bu değişiklikten etkilenir.</p>
        <p>Değiştirilebilirlik: İlkel tipler değiştirilemezdir. Örneğin, bir string değeri değiştirmek, aslında yeni bir string oluşturur. Ancak referans tipleri değiştirilebilir. Örneğin, bir nesne içindeki özellikleri değiştirebilirsiniz.</p>
        <p>Kopyalama: İlkel tipler kopyalandığında gerçek değerler kopyalanırken, referans tipleri yalnızca referansları kopyalar, gerçek veri kopyalanmaz.</p>
        <p>Bellekte Saklanma: İlkel tipler, bellekte doğrudan değer olarak saklanırken, referans tipleri bellekte bir adresi gösterir.</p>
        <p>Özetlemek gerekirse, ilkel veri tipleri doğrudan değerlerdir ve bellekte sabit bir boyutta saklanırken, referans veri tipleri bellekte adreslere işaret eder ve bu adreslere bağlı olarak veriye erişilir. </p>
     </>
    )
  },{ question :" 5. JavaScript MultiThread bir dil midir Single Thread bir dil midir?",  answer : (<> 
  <p>JavaScript, temel olarak Single-Threaded bir dildir. Bu, JavaScript'in aynı anda sadece bir iş parçacığı (thread) üzerinde çalıştığı anlamına gelir. Tarayıcı ortamında, JavaScript kodu genellikle "Ana İş Parçacığı" veya "UI İş Parçacığı" olarak adlandırılan tek bir iş parçacığında çalışır. Bu iş parçacığı, kullanıcı arayüzü (UI) ile ilgili işlemleri gerçekleştirir ve JavaScript kodunu yürütür.</p>
  <p>Ancak, JavaScript'in bu Single-Threaded doğası, Web API'lerinin (Web API'ler, tarayıcı tarafından sağlanan ek fonksiyonlar ve işlevlerdir) kullanımıyla etkileşime girer. Örneğin, bir HTTP isteği yapmak için XMLHttpRequest veya fetch kullanıldığında, bu işlemler asenkron olarak gerçekleşir ve ana iş parçacığını bloke etmez. Benzer şekilde, zamanlayıcılar (timers) veya DOM olayları gibi diğer asenkron işlemler de mevcuttur.</p>
  <p>Ayrıca, JavaScript'in son zamanlarda Web Workers olarak bilinen çoklu iş parçacığı desteği eklenmiştir. Web Workers, JavaScript kodunu arka planda ayrı bir iş parçacığında çalıştırmak için kullanılır ve böylece CPU yoğun işlemleri ana iş parçacığından ayırarak tarayıcı etkileşimini engellemeyi önler.</p>
  <p>Bu nedenle, JavaScript'in Single-Threaded olmasına rağmen, asenkron işlemler ve Web Workers gibi mekanizmaları kullanarak çoklu iş parçacığı benzeri işlevsellikler elde edilebilir. Ancak, ana iş parçacığı dışında çalışan kodlar yine de ana iş parçacığına geri dönmelidir, çünkü DOM manipülasyonu gibi işlemler yalnızca ana iş parçacığında güvenli bir şekilde gerçekleştirilebilir.






</p>
   </> )  },
   { question :" 6. == ve === farkı nedir?",
     answer : (<> == (denklik operatörü): İki değerin eşit olup olmadığını kontrol eder. Ancak, bu operatör sadece değerleri karşılaştırırken, veri türlerini dikkate almaz. Eğer karşılaştırılan veri türleri farklı ise, JavaScript, değerleri karşılaştırırken otomatik olarak tür dönüşümü yapar ve sonuçları karşılaştırır.
     <p>Örneğin:</p>
     
     javascript
     Copy code
     console.log(5 == "5"); // true, çünkü JavaScript, sayısal ve dize değerlerini otomatik olarak karşılaştırırken sayısal değeri dizeye dönüştürür ve sonuç olarak iki değer eşittir.
     <p>=== (katı denklik operatörü): Bu operatör, hem değerlerin hem de veri türlerinin aynı olup olmadığını kontrol eder. Yani, eğer karşılaştırılan iki değer aynı türde değilse, === operatörü hemen false döner.</p>
     Örneğin:
     
     javascript
     Copy code
     console.log(5 === "5"); // false, çünkü bu sefer tür dönüşümü yapılmaz ve sayısal ve dize değerleri farklı türlerde olduğu için karşılaştırma sonucu false olur.
     Bu nedenle, genel olarak, tipik olarak === operatörünü tercih etmek, beklenmeyen sonuçlara yol açabilecek olan tür dönüşümlerinden kaçınmak için daha güvenlidir. Ancak, bazı durumlarda, özellikle null veya undefined'ı kontrol ederken == operatörü kullanılabilir, çünkü bu durumlarda değerler aynı sonucu verir. </> )  }
    ,
         { question :" 7. == ve === farkı nedir?",
         answer : (<> </> )  }
];


//  ,
//   { question :" 7. == ve === farkı nedir?",
//   answer : (<> </> )  }
   
    
    