export default function Social({socialIcons, className = 'gap-3' }) {
  return (
    <ul className={`social-list d-flex align-items-center flex-wrap ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}><a href={item.url} target="_blank" className="social-link d-flex align-items-center justify-content-center rounded-pill">{item.icon}</a></li>
      ))}
    </ul>
  )
}
