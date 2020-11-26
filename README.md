This component was bootstrapped with [Direflow](https://direflow.io).

# Code Surfer Wc

Usage example:

```html
<script type="application/javascript" src="build/code-surfer-wc.js"></script>

<!-- Set static properties -->
<code-surfer-wc
     width="100%"
    height="95vh"
    fontSize="2rem"
    dark="true"
></code-surfer-wc>

<script>

// Set steps
document.querySelector('code-surfer-wc').steps = [
    {
      code: `var x1 = 1
debugger`,
      focus: "1",
      lang: "js"
    },
    {
      code: `var x0 = 3
var x1 = 1
var x0 = 3`,
      lang: "js"
    }
];

// Wait 2 secondes and go to the next step
setTimeout(function() {
    document.querySelector('code-surfer-wc').progress = 1;
}, 2000);

</script>
```
