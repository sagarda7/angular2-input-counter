# angular2-input-counter
This labrary adds two incremental buttons + and - for input to make like counter. eg. you can use this in shopping cart to show quantity
## Installation

To install this library, run:

```bash
$ npm install angular2-input-counter --save
```

## Consuming  library

you can import your library in any Angular application by running:

```bash
$ npm install angular2-input-counter
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { InputCounterModule } from 'angular2-input-counter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    InputCounterModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<input-counter btnClass="customClass" inputClass="customClass"></input-counter>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Sagar Devkota](mailto:sagarda7@yahoo.com)
