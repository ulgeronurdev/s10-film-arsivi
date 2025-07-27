# Film Arşivi

Daha önce yapılmış bir film uygulaması artık güncellenirken sorunlar çıkarmaya başladı. Yönetilmesi çok zor oldu. Projenin kapsamı da gittikçe karmaşıklaşıyor. Bu yüzden bu projeye redux eklenecek.

Senden de aşağıda listesi çıkarılmış işleri tamamlaman bekleniyor.

```sh
ÖNEMLİ NOT:
Her adımdan sonra testlerde ilerleme olmayabilir.
Uygulamayı çalışır hale getirmeye odaklanırsanız
günün sonunda tüm testler geçecektir.
```

### 1. Projeye Redux ekle

Kütüphaneler npm install ile kuruldu. Store oluştur ve tüm uygulamadan erişilebilir hale getir.

- `store/reducer.js` dosyasında, reducer fonksiyonundali state parametresinin varsayılan değerini `initialState` olarak ayarla. // yapıldı

`store/store.js` dosyasında:

- `reducer.js` dosyasındaki `reducer` fonksiyonunu import et.
- redux paketinden `legacy_createStore` metodunu `createStore` adıyla import et.
- Bu ikisini kullanarak bir store yarat ve `myStore` değişkenine eşitle. (myStore adını ve exportunu değiştirme.) // yapıldı

`main.jsx` dosyasında:

- `react-redux` paketinden `Provider` componentını import et.
- `myStore` değerini import et.
- Bu ikisini `BrowserRouter`'ı saracak şekilde kullan. //yapıldı

### 2. Film reducerını bağla

- **MovieList componenti, tüm filmleri ekrana yazdırmalı.** Boş array olarak tanımlanmış `movies` değişkeninin asıl değerini `useSelector` ile storedan al.
- **Movie componentinin çalışması için film listemize erişmesi gerekir.** Boş array olarak tanımlanmış `movies` değişkeninin gerçek değerini yine `useSelector` ile storedan al.
- **MovieHeader, başlık metnini görüntülemek için appTitle'ı kullanır.** Bu componentde `appTitle` değerini yine `useSelector` ile storedan al. // yapıldı

### 3. Sil ve Film Ekle actionlarını bağla

- **Movie componentindeki Sil butonu, tıklandığında filmi silmeli.** `useDipatch` ve `deleteMovie` **action creator**unu, Sil butonunun `onClick`'ine bağla. (Dikkat: `deleteMovie` çalışmak için hangi parametreyi bekliyor?)
- `dispatch` ile silme işlemi sonrası kullanıcıyı ana sayfaya yönlendirmek için `push('/movies')` komutunu kullan.

- `reducer`a bir `ADD_MOVIE` case'i ekle.
- Bu yeni case, `payload` aracılığıyla iletilen yeni film objesini storedaki `movies` arrayine eklemeli.
- `actions.js`'de `addMovie` için bir **action creator** oluştur.
- Bir filmin eklenmesini tetikleyen butonu bul ve `addMovie` action creatorunu dispatch etmesi için gerekli değişiklikleri yap.
- `dispatch` ile ekleme işlemi sonrası kullanıcıyı ana sayfaya yönlendirmek için `push('/movies')` komutunu kullan.

### 4. Favorilerle ilgili store değerlerini oluştur

Favoriler için `initialState`e aşağıdaki değerleri ekle:

- `favorites`: Favorilenmiş filmleri içerecek bir dizi, başlangıç değeri `[]`.
- `displayFavorites`: Favoriler kolonunun görüntülenip görüntülenmediği bilgisini saklayan, başlangıç değeri `true` olan bir boolean.

- `favorites` değerini FavoriteMovieList'e çek ve test et.
- `displayFavorites` değerini App.jsx, Movie.jsx ve MovieHeader.jsx componentlarına çek.

### 5. Favorileme actionlarını bağla

Aşağıdaki actionlar için reducer caselerini ve event handler kodlarını yaz. (Actionlarda eksik olanlar varsa onları da tamamla.)

- `toggleFavorites`: `displayFavorites` değerini tersine çevirir. displayFavorites `true` olduğunda, `Favorilere ekle` düğmesi `Movie` sayfasında görünmemeli.
- `addFavorite`: Gönderilen `movie` objesini `favorites` arrayine ekler.
- `removeFavorite`: Gönderilen id'ye ait filmi `favorites` arrayinden çıkarır.

### 6. Favori actionlarını daha iyi hale getir

- Şu anda aynı film birden çok kez favorilere eklenebiliyor. `addFavorite action'ını güncelle`: Favorilerde olmayan filmler favorilere eklenebilmeli, zaten `favorites` içindeki bir film tekrar favori olarak eklenmemeli (Ama çıkarılmamalı da.)
- Eğer bir film `stores.movies` listesinden silinirse, favorilerden de silinmeli (eğer ekliyse.)

### 7. Projeye redux-logger ekle ve kullan

Projeye [redux-logger](https://github.com/LogRocket/redux-logger) yükle ve dokümantasyonunda tarif edildiği gibi projeye ekle.

### Notlar

- Ekleyeceğin tüm action type'ları `actions.jsx` içinde `export const ... = "..."` şeklinde tanımlamalısın.
- UI tarafında yalnızca `App.jsx` içinde düzenleme yapmalısın. Diğer bileşenleri değiştirmene gerek yok.
- Tüm reducer case'lerinin `return {...state, ...}` formatında immutable şekilde yazılması bekleniyor.

## 🚀 Projeye Başlama

### Adım 1: Projeyi Kendi Hesabınıza Kopyalayın

1. Bu sayfanın sağ üst köşesindeki **Fork** butonuna tıklayın
2. Kendi GitHub hesabınızda proje kopyası oluşacak

### Adım 2: Projeyi Bilgisayarınıza İndirin

Görseldeki adımları takip edin ya da terminali kullanabilirsiniz.

```bash
git clone [buraya-kendi-fork-linkinizi-yazın]
cd [proje-klasor-adi]
```

### Adım 3: Gerekli Kurulumları Yapın

Terminal açın ve sırasıyla şu komutları çalıştırın:

```bash
npm install
npm run c2w
```

> **💡 İpucu:** Bu komutlar gerekli paketleri yükler ve test sistemini başlatır.

### Adım 4: Projeyi Çalıştırın ve Browserda Görüntüleyin

Yeni bir terminal tabı açın ve şu komutu çalıştırın:

```bash
npm run dev
```

Bu komut projeyi çalıştıracak ve bir link verecek. Bu linki browserda açın ve yazdıklarınızın çıktısını gözlemleyin.

## 📝 Geliştirme Süreci

### 0. Öğrenci numaranızı `student_id.txt` dosyasına yazın 

### 1. Testleri Takip Edin

- Testlerin çalıştığı trminali açık tutun ve test çıktılarını izleyin
- Başarılı testler ✅, başarısız testler ❌ ile gösterilir

### 2. Adım Adım İlerleyin

- Her küçük ilerleme sonrası değişiklikleri kaydedin
- Testlerin durumunu kontrol edin
- Bir özelliği tamamen bitirdikten sonra commit yapın

### 3. Düzenli Commit Yapın

GitHub Desktop uygulamasını kullanarak ilerlemenizi sıklıkla GitHub'a gönderin.
Ya da terminali kullanabilirsiniz:

```bash
git add .
git commit -m "Anlamlı bir commit mesajı"
git push origin main
```

## 🧪 Otomatik Değerlendirme Sistemi

Bu proje otomatik test sistemi ile gelir. Test sonuçları terminal penceresinde görünür. Kırmızı (❌) testleri yeşile (✅) çevirmeye odaklanın.

## 🆘 Sorun Giderme

### Yaygın Sorunlar:

- **npm komutları çalışmıyor:** Node.js kurulu olduğundan emin olun
- **Testler çalışmıyor:** Terminal penceresini kapatıp `npm run c2w` komutunu tekrar çalıştırın

### Yardım İçin:

1. Terminal hatasını tam olarak okuyun
2. Dosya yollarının doğru olduğunu kontrol edin
3. Değişiklikleri kaydettiğinizden emin olun

## 📋 Çalışma Akışı Özeti

1. ✅ Projeyi fork edin ve clone edin
2. ✅ `npm install` ve `npm run c2w` çalıştırın
3. ✅ `npm run dev` ile projeyi çalıştırın ve size verdiği linki açarak yaptıklarınızı takip edin
4. ✅ Terminal'den test sonuçlarını takip edin
5. ✅ Düzenli olarak commit yapın
6. ✅ İlerleyişinizi GitHub'a push edin

**İyi çalışmalar! 🎨✨**
