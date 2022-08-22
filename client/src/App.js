function App() {
  return (
    <div className="App">
      <form action="http://localhost:3002/product/add" method="POST">
        <input type="text" placeholder='title' name='title' />
        <input type="number" placeholder='price' name='price' />
        <select name="category">
          <option value="shoes">Shoes</option>
          <option value="t-shirts">T-shirts</option>
          <option value="chaquet">Chaquet</option>
          <option value="calzon">Calzon</option>
        </select>
        <input type="text" placeholder='enterprise' name='enterprise' />
        <input type="radio" name="offer" />
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
        <input type="number" name="quantity" placeholder="quantity" />
        <input type="text" name="description" placeholder="description" />
        <input type="hidden" name="sizes" value={['s', 'm', 'l', 'xxl']} />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
