export const AdBanner = () => {
  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
      data-ad-slot="YYYYYYYYYYYY"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}; 