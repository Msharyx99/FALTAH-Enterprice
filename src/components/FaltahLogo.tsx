export default function FaltahLogo({ size = 'normal' }: { size?: 'normal' | 'large' }) {
  return (
    <div className={`faltah-logo ${size}`}>
      <div className="helmet">⌁</div>
      <div>
        <strong>FALTAH</strong>
        <span>Technical Knowledge Ambassador</span>
      </div>
    </div>
  );
}
