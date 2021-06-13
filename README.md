# Custom Range Slider

![screen recording](https://media.giphy.com/media/ZJgT04aXp9rRrfWVCa/giphy.gif)

## project notes

1. HTML

- input range

2. CSS

- webkit, moz, ms for browser compatibility

3. JavaScript

- showing value with calculating left value of the thumb

---

Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

---

## Takeaways from the instructor

1. HTML

- input min=0, max=0
- label for the range number

2. CSS

3. JavaScript

```
const range = document.getElementById('range');

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const range_width = getComputedStyle(e.target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_width = +range_width.substring(0, range_width.length - 2);
  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;

  const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);

  label.style.left = `${left}px`

  label.innerHTML = value;
})

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
```
