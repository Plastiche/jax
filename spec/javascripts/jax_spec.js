describe("Jax", function() {
  it("should be loaded", function() {
    /* if false, then it didn't load all of the Jax libraries successfully */
    expect(Jax.loaded).toBeTrue();
  });
});
