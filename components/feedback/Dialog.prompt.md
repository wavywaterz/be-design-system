Modal with serif title and warm blurred overlay; Esc/backdrop close.

```jsx
<Dialog open={open} onClose={close} title="Leave the hive?"
  footer={<><Button variant="ghost" onClick={close}>Stay</Button><Button variant="danger" onClick={leave}>Leave</Button></>}>
  Your plots stay planted. You can return anytime.
</Dialog>
```
