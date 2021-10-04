# Custom React Tree

![CircleCI](https://img.shields.io/circleci/build/github/kiranlm/js-tree-react/main) [![GitHub](https://img.shields.io/github/license/kiranlm/js-tree-react)](https://github.com/kiranlm/js-tree-react/blob/main/LICENSE) [![David](https://img.shields.io/david/peer/kiranlm/js-tree-react)](https://github.com/kiranlm/js-tree-react/blob/main/package.json) ![npm](https://img.shields.io/npm/v/js-tree-react)

### Description

A simple customizable tree component for react made on top of [js-tree](https://www.npmjs.com/package/js-tree)

## Features

- Support all popular browsers, including Internet Explorer 9 and above.
- Can use custom component for nodes
- Can use custom icons for collapse/expand

## Example

## Install

```bash
npm i js-tree-react
```

[![js-tree-react](https://nodei.co/npm/js-tree-react.png)](https://npmjs.org/package/js-tree-react)

## Usage

#### Basic example

> data.json

```json
{
  "name": "Top Parent",
  "children": [
    {
      "name": "Parent 1",
      "collapsed": true,
      "children": [
        {
          "name": "Child 1 level 1",
          "leaf": true,
          "children": [
            {
              "name": "Child 1 level 2",
              "leaf": true
            }
          ]
        },
        {
          "name": "Child 2 level 1",
          "leaf": true
        },
        {
          "name": "Child 3 level 1",
          "leaf": true
        },
        {
          "name": "Child 4 level 1",
          "leaf": true
        }
      ]
    },
    {
      "name": "Parent 2",
      "leaf": true
    },
    {
      "name": "Parent 3",
      "children": [
        {
          "name": "Child 1 level 1",
          "leaf": true,
          "children": [
            {
              "name": "Child 1 level 2",
              "leaf": true
            }
          ]
        }
      ]
    }
  ]
}
```

> App.jsx

```javascript
import React from "react";
import Tree from "js-tree-react";
import treeData from "./data.json";

const App = () => {
  const renderNode = (node) => {
    return <div>{node.name}</div>;
  };

  return (
    <div className="app">
      <Tree paddingLeft={15} tree={treeData} renderNode={renderNode} />
    </div>
  );
};

export default App;
```

## API

### Tree props

| Name              | Description                         | Type     |
| ----------------- | ----------------------------------- | -------- |
| paddingLeft       | Left padding before the node        | Number   |
| tree              | Object containing nodes             | Object   |
| renderNode        | Function for rendering custom nodes | Function |
| collapseIconOpen  | Icon for collapse node expand       | Element  |
| collapseIconClose | Icon for collapse node collapse     | Element  |

## License

js-tree-react is released under the MIT license.

> Made with :heart: by **`kiranlm`**
