![GitHub all releases](https://img.shields.io/github/downloads/zeonardo/ztabs/total)
![GitHub last commit](https://img.shields.io/github/last-commit/zeonardo/ztabs)
![npm](https://img.shields.io/npm/v/ztabs)

# ztabs

a simple tab test project
  
![Expected screen output](https://github.com/zeonardo/ptf-tabulator/blob/master/src/assets/tabulator.png)

## Getting Started

```sh
$ npm install --save ztabs
```
or
```sh
$ yarn add ztabs
```

## Usage

```sh
import Tab from "ztabs";
```

...

```html
<Tab initialActive={0}>
  <Tab.Pane title="First Tab">
    Tab 0
  </Tab.Pane>
  <Tab.Pane title="Second Tab">
    <div>
      Tab <strong>1</strong>
    </div>
  </Tab.Pane>
  <Tab.Pane title="Third Tab">
    <>
      <h2>Tab</h2>
      <span>2</span>
    </>
  </Tab.Pane>
</Tab>
```

## Options and examples

### Tab

- `initialActive` (uncontrolled mode): zero-based index of the default active tab. Tab changes will be handled by `Tab`
  - ```html
  <Tab initialActive={0}>
  ```
- `active` (controlled mode): zero-based index of the currently active tab. Tab changes will be controlled by this `{value}` through `onActiveChange`
  - ```html
  <Tab active={value}>
  ```
- `onActiveChange` (controlled mode): event handler function called upon tab click
  - ```html
  <Tab active={value} onActiveChange={(event: React.MouseEvent<HTMLButtonElement>) => setValue(+event.currentTarget.value)} >
  ```

### Tab.Pane

- `title`: Tab name
  - ```html
  <Tab.Pane title="MyTab" >
  ```
- `"children"`: Tab content
  - ```html
  <Tab.Pane title="MyTab" >
    <div>Tab Content</div>
  </Tab.Pane>
  ```


## Credits

TODO: Write credits :)

## Built With

* React
* TypeScript
* Love

## Versioning

We use [SemVer](http://semver.org/) for versioning.
For the versions available, see the [tags on this repository](https://github.com/zeonardo/ztabs/tags).

## Authors

* **Zeonardo Lima** - [zeonardo on GitHub](https://github.com/zeonardo)

## License
[MIT License](https://zeonardo.mit-license.org/2022) © zeonardo 2022