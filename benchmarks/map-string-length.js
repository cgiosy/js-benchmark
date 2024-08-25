
const small = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

const large = [
  "\n  opacity: 0;\n  position: absolute;\n\n  &.MuiTouchRipple-rippleVisible {\n    opacity: 0.3;\n    transform: scale(1);\n    animation-name: animation-1taevns;\n    animation-duration: 550ms;\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  &.MuiTouchRipple-ripplePulsate {\n    animation-duration: 200ms;\n  }\n\n  & .MuiTouchRipple-child {\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: currentColor;\n  }\n\n  & .MuiTouchRipple-childLeaving {\n    opacity: 0;\n    animation-name: animation-5ich1p;\n    animation-duration: 550ms;\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  }\n\n  & .MuiTouchRipple-childPulsate {\n    position: absolute;\n    /* @noflip */\n    left: 0px;\n    top: 0;\n    animation-name: animation-f6tr5a;\n    animation-duration: 2500ms;\n    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n    animation-iteration-count: infinite;\n    animation-delay: 200ms;\n  }\n",
  "font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 16px;border:0;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);};padding:5px 15px;border:1px solid currentColor;border-color:var(--variant-outlinedBorder, currentColor);background-color:var(--variant-outlinedBg);color:var(--variant-outlinedColor);&.Mui-disabled{border:1px solid rgba(0, 0, 0, 0.12);};--variant-textColor:#1976d2;--variant-outlinedColor:#1976d2;--variant-outlinedBorder:#1976d280;--variant-containedColor:#fff;--variant-containedBg:#1976d2;@media (hover: hover){&:hover{--variant-containedBg:#1565c0;--variant-textBg:#1976d20a;--variant-outlinedBorder:#1976d2;--variant-outlinedBg:#1976d20a;}};padding:3px 9px;font-size:0.8125rem;;",
  "font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 16px;border:0;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);};padding:5px 15px;border:1px solid currentColor;border-color:var(--variant-outlinedBorder, currentColor);background-color:var(--variant-outlinedBg);color:var(--variant-outlinedColor);&.Mui-disabled{border:1px solid rgba(0, 0, 0, 0.12);};--variant-textColor:#1976d2;--variant-outlinedColor:#1976d2;--variant-outlinedBorder:#1976d280;--variant-containedColor:#fff;--variant-containedBg:#1976d2;@media (hover: hover){&:hover{--variant-containedBg:#1565c0;--variant-textBg:#1976d20a;--variant-outlinedBorder:#1976d2;--variant-outlinedBg:#1976d20a;}};",
  "font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 16px;border:0;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);};padding:5px 15px;border:1px solid currentColor;border-color:var(--variant-outlinedBorder, currentColor);background-color:var(--variant-outlinedBg);color:var(--variant-outlinedColor);&.Mui-disabled{border:1px solid rgba(0, 0, 0, 0.12);};--variant-textColor:#1976d2;--variant-outlinedColor:#1976d2;--variant-outlinedBorder:#1976d280;--variant-containedColor:#fff;--variant-containedBg:#1976d2;@media (hover: hover){&:hover{--variant-containedBg:#1565c0;--variant-textBg:#1976d20a;--variant-outlinedBorder:#1976d2;--variant-outlinedBg:#1976d20a;}};padding:7px 21px;font-size:0.9375rem;;",
  "font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 16px;border:0;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);};padding:5px 15px;border:1px solid currentColor;border-color:var(--variant-outlinedBorder, currentColor);background-color:var(--variant-outlinedBg);color:var(--variant-outlinedColor);&.Mui-disabled{border:1px solid rgba(0, 0, 0, 0.12);};--variant-textColor:#2e7d32;--variant-outlinedColor:#2e7d32;--variant-outlinedBorder:#2e7d3280;--variant-containedColor:#fff;--variant-containedBg:#2e7d32;@media (hover: hover){&:hover{--variant-containedBg:#1b5e20;--variant-textBg:#2e7d320a;--variant-outlinedBorder:#2e7d32;--variant-outlinedBg:#2e7d320a;}};",
  "font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;font-weight:500;font-size:0.875rem;line-height:1.75;letter-spacing:0.02857em;text-transform:uppercase;min-width:64px;padding:6px 16px;border:0;border-radius:4px;transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&:hover{text-decoration:none;}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);};padding:5px 15px;border:1px solid currentColor;border-color:var(--variant-outlinedBorder, currentColor);background-color:var(--variant-outlinedBg);color:var(--variant-outlinedColor);&.Mui-disabled{border:1px solid rgba(0, 0, 0, 0.12);};--variant-textColor:#d32f2f;--variant-outlinedColor:#d32f2f;--variant-outlinedBorder:#d32f2f80;--variant-containedColor:#fff;--variant-containedBg:#d32f2f;@media (hover: hover){&:hover{--variant-containedBg:#c62828;--variant-textBg:#d32f2f0a;--variant-outlinedBorder:#d32f2f;--variant-outlinedBg:#d32f2f0a;}};",
  "color:rgba(0, 0, 0, 0.6);;&:hover{background-color:#1976d20a;};&.Mui-checked, &.MuiCheckbox-indeterminate{color:#1976d2;}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);};&:hover{@media (hover: none){background-color:transparent;}};",
  "padding:9px;border-radius:50%;color:rgba(0, 0, 0, 0.6);;&:hover{background-color:#1976d20a;};&.Mui-checked, &.MuiCheckbox-indeterminate{color:#1976d2;}&.Mui-disabled{color:rgba(0, 0, 0, 0.26);};&:hover{@media (hover: none){background-color:transparent;}};;",
  "position:absolute;top:0;left:0;z-index:1;color:#fff;transition:left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&.Mui-checked{transform:translateX(20px);}&.Mui-disabled{color:#f5f5f5;}&.Mui-checked + .MuiSwitch-track{opacity:0.5;}&.Mui-disabled + .MuiSwitch-track{opacity:0.12;}& .MuiSwitch-input{left:-100%;width:300%;}&:hover{background-color:#0000000a;@media (hover: none){background-color:transparent;}};&.Mui-checked{color:#1976d2;&:hover{background-color:#1976d20a;@media (hover: none){background-color:transparent;}}&.Mui-disabled{color:#a7caedff;}}&.Mui-checked + .MuiSwitch-track{background-color:#1976d2;};",
  "padding:9px;border-radius:50%;position:absolute;top:0;left:0;z-index:1;color:#fff;transition:left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;&.Mui-checked{transform:translateX(20px);}&.Mui-disabled{color:#f5f5f5;}&.Mui-checked + .MuiSwitch-track{opacity:0.5;}&.Mui-disabled + .MuiSwitch-track{opacity:0.12;}& .MuiSwitch-input{left:-100%;width:300%;}&:hover{background-color:#0000000a;@media (hover: none){background-color:transparent;}};&.Mui-checked{color:#1976d2;&:hover{background-color:#1976d20a;@media (hover: none){background-color:transparent;}}&.Mui-disabled{color:#a7caedff;}}&.Mui-checked + .MuiSwitch-track{background-color:#1976d2;};;",
]


export default {
  blocks: [
    {
      id: 'small strings',
      setup: () => {
        const strings = small

        const map = new Map()
        strings.forEach(s => {
          map.set(s, true)
        })

        return () => {
          let result = 0
          strings.forEach(s => {
            if (map.has(s)) {
              result += 1
            }
          })
          return result
        }
      },
    },
    {
      id: 'large strings',
      setup: () => {
        const strings = large

        const map = new Map()
        strings.forEach(s => {
          map.set(s, true)
        })

        return () => {
          let result = 0
          strings.forEach(s => {
            if (map.has(s)) {
              result += 1
            }
          })
          return result
        }
      },
    },
  ]
}
