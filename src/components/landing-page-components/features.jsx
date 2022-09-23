import { featureCardStyle, featuresStyle } from "../../style/features-style";

export default function Features() {
  return (
    <div className={featuresStyle}>
      <div className={featureCardStyle}>
        <p className='text-xl mb-2'>Ribuan lowongan</p>
        <p className="text-sm">Ada ribuan lowongan yang di posting setiap harinya.</p>
      </div>
      <div className={featureCardStyle}>
        <p className='text-2xl mb-2'>Sangat mudah untuk melamar</p>
        <p className="text-sm">
          hanya dengan beberapa klik di monitor anda, HRD perusahaan akan
          menerima CV anda.
        </p>
      </div>
      <div className={featureCardStyle}>
        <p className='text-xl mb-2'>Customer Service 24/7</p>
        <p className="text-sm">
          Mengalami masalah dalam mengakses platform kami? Tenang, anda bisa
          menghubungi kami 24/7.
        </p>
      </div>
      <div className={featureCardStyle}>
        <p className='text-xl mb-2'>Ribuan lowongan</p>
        <p className="text-sm">Ada ribuan lowongan yang di posting setiap harinya.</p>
      </div>
    </div>
  );
}
