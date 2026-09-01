Native select styled like Input, with chevron; pass `<option>` children.

```jsx
<Select label="Season" value={v} onChange={e=>setV(e.target.value)}>
  <option>Spring</option><option>Summer</option>
</Select>
```
