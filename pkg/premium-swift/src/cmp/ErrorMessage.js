function Stop({
  size = 11,
  border = 1,
  fill = "#d32f2f",
  borderColor = "#ffffff",
}) {
  const polygon = "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {/* Outer (border) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: borderColor,
          clipPath: polygon,
        }}
      />
      {/* Inner (fill) */}
      <div
        style={{
          position: "absolute",
          top: border,
          left: border,
          width: size - 2 * border,
          height: size - 2 * border,
          background: fill,
          clipPath: polygon,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: size * 0.78,
            fontWeight: 600,
            marginBottom: 1,
            lineHeight: 1,
          }}
        >
          ×
        </span>
      </div>
    </div>
  )
}

function ErrorMessage({ txt }) {
  return (
    <div style={{background: 'rgba(155, 41, 41, 1)', borderRadius: 4, fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%', paddingLeft: 10}}>
      <Stop/>
      <p style={{color: 'white', margin: 0, padding: '3px 6px 3px 6px'}}>{txt}</p>
    </div>
  )
}

export default ErrorMessage