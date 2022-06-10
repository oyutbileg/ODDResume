export const LoaderSVG = (wid?: string, color = 'rgb(255 0 21)'): any => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: 'auto',
      background: 'transparent',
      display: 'block',
      shapeRendering: 'auto',
    }}
    width={wid}
    height={wid}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="rotate(0 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.9166666666666666s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(30 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.8333333333333334s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(60 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.75s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(90 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.6666666666666666s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(120 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5833333333333334s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(150 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.5s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(180 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.4166666666666667s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(210 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.3333333333333333s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(240 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.25s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(270 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.16666666666666666s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(300 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="-0.08333333333333333s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
    <g transform="rotate(330 50 50)">
      <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill={color}>
        <animate
          attributeName="opacity"
          values="1;0"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </g>
  </svg>
)
interface Props {
  size?: string
  loading: boolean,
  children?: React.ReactNode
}

const ButtonLoader: React.FC<Props> = ({ size = '10rem', loading, children }) => {
  return loading ? <>{LoaderSVG(size)}</> : <>{children}</>
}

export default ButtonLoader
