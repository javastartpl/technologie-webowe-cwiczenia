package pl.javastart.shop;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.util.List;

@WebServlet("")
public class HomeController extends HttpServlet {
    private ProductRepository productRepository = ProductRepository.getInstance();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) {
        List<Product> products = productRepository.findAll();
        request.getAttribute("products", products);
        request.getRequestDispatcher("index.jsp").forward(request, response);
    }

}
