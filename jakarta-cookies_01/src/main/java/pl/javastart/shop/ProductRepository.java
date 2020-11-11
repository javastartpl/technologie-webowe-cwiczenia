package pl.javastart.shop;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

class ProductRepository {
    private static ProductRepository instance;
    private List<Product> products = new ArrayList<>();

    static ProductRepository getInstance() {
        return Objects.requireNonNullElseGet(instance, () -> instance = new ProductRepository());
    }

    private ProductRepository() {
        products.add(new Product(1, "Pralka", "Cicha i oszczędna pralka, która posłuży Ci przez długie lata",
                1299, "laundry.png"));
        products.add(new Product(2, "Lodówka", "Lodówka, która zaskoczy Cię swoją pojemnością. Zachowaj świeżość" +
                "produktów na dłużej dzięki specjalnej technologii SuperCool.", 1899, "fridge.jpg"));
        products.add(new Product(3, "Zestaw lamp", "Lampy, które ocieplą Twoje wnętrze. Industrialny styl" +
                "nada Twojemu mieszkaniu niepowtarzalny klimat.", 299, "lamp.jpg"));
        products.add(new Product(4, "Telewizor", "Oglądaj filmy i seriale i poczuj się jak w kinie. Ekran" +
                "o niezliczonej liczbie barw, który zaskoczy Cię także dźwiękiem.", 2999, "tv.jpg"));
    }

    Optional<Product> findById(int id) {
        for (Product product : products) {
            if (product.getId() == id)
                return Optional.of(product);
        }
        return Optional.empty();
    }

    List<Product> findAll() {
        return products;
    }
}
