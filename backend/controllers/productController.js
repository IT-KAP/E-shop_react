exports.getProducts = (req, res, next) => {
  res.status(200).json({
    succes: true,
    message: "Táto trasa zobrazí všetky produkty v databáze",
  });
};
