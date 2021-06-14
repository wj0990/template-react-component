React Component Example for TypeScript.
===
<!--rehype:style=color:red;-->

Create a project for the React component library containing a website preview of the component library instance. The documents and component libraries are put into a project, all written in `TypeScript`, the component library source files are added to the `src` directory, and the document website source files are added to the `website` directory.

## Install

```bash
npm i @wangchuxi/template
```

## Basic Usage


<!--rehype:codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import Button from '@wangchuxi/template';

const Demo = () => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
    </div>
  )
};
ReactDOM.render(<Demo />, _mount_);
```

**development**

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!