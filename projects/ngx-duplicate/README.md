# Ngx Duplicate

Ngx Duplicate is a subset of `NgForOf`'s functionality, which allows for duplicate blocks of code without needing to
create an array.

> **Note:** This is not a replacement for `ngForOf`, anytime you already have an array use that instead.

## Installation

Ngx Duplicate is available from [npmjs.com](https://www.npmjs.com/package/ngx-duplicate)

### Yarn

`yarn add ngx-duplicate`

### NPM

`npm install ngx-duplicate --save`

## Getting Started

You'll need to add the `NgxDuplicateDirective` to the relevant parts of your application:

### Standalone Component

```typescript
// Your Standalone Component

import {NgxDuplicateDirective} from 'ngx-duplicate';

@Component({
  selector: 'app-component',
  template: ``,
  standalone: true,
  imports: [NgxDuplicateDirective],
})

```

or

### Module

```typescript
// Your NgModule

import {NgxDuplicateDirective} from 'ngx-duplicate';

@NgModule({
  declarations: [...],
  imports: [NgxDuplicateDirective],
  exports: [...],
})

```

> **Note:** You can also import the `NgxDuplicateModule` if you prefer not to use the standalone syntax of imports

## Usage

```html
// Your Template

<p *ngxDuplicate="5"></p>

```

> **Note:** Since `ngxDuplicate` is a structural directive you will need to add the `*` at the beginning or wrap you block in
> a `ng-template` and add the directive directly onto that

## Context

#### Inputs

| Name    | Type      | Description                                   |
|---------|-----------|-----------------------------------------------|
| `count` | `number`  | Returns the current count of the duplicate    |
| `first` | `boolean` | Returns if the current element is the first   |
| `last`  | `boolean` | Returns if the current element is the last    |
| `odd`   | `number`  | Returns if the current elements count is odd  | 
| `even`  | `number`  | Returns if the current elements count is even |

#### Example

```html
// Your Template

<div *ngxDuplicate="5; let count = count; let first = first; let last = last; let odd = odd; let even = even">
  <button
    [class.button-first]="first"
    [class.button-last]="last"
    [class.button-odd]="odd"
    [class.button-even]="even"
  >
    button number {{ count }}
  </button>
</div>

```

> **Note:** All contexts are strongly typed with context guards meaning if you make a spelling mistake the compiler can point you
> to the correct context value

