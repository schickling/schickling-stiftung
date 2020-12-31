import { Meta } from '@storybook/react'
import React from 'react'
// import { Devtools } from '@ui-devtools/tailwind'
import { Layout } from './Layout'

export default {
  title: 'Layout',
  component: Layout,
} as Meta

export const Default = () => (
  // <Devtools enabled>
  <Layout title="Test" />
  // </Devtools>
)

// export const Other = () => {
//   const [txt, setTxt] = React.useState('')

//   return (
//     <div>
//       <h1>hi there 8</h1>
//       <input
//         type="text"
//         placeholder="test"
//         value={txt}
//         onChange={(e) => setTxt(e.target.value)}
//         className="mt-3 bg-black"
//       />
//     </div>
//   )
// }
