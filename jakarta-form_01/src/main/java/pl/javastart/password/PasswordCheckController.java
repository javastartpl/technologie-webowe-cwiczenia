package pl.javastart.password;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet("/verify")
public class PasswordCheckController extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String password = request.getParameter("pass");
        List<String> unsatisfiedConstraints = PasswordValidator.checkPasswordStrength(password);
        sendResponse(response, unsatisfiedConstraints, password);
    }

    private void sendResponse(HttpServletResponse response, List<String> unsatisfiedConstraints, String password) throws IOException {
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");
        PrintWriter writer = response.getWriter();
        writer.println("<!DOCTYPE html>");
        writer.println("<html>");
        writer.println("<body>");
        writer.println("<h2>Twoje hasło to: " + password + "</h2>");
        if (unsatisfiedConstraints.isEmpty()) {
            writer.println("<p>Hasło spełnia wszystkie kryteria bezpieczeństwa</p>");
        } else {
            writer.println("<ul>");
            unsatisfiedConstraints.forEach(constraint -> writer.println("<li>" + constraint + "</li>"));
            writer.println("</ul>");
        }
        writer.println("</body>");
        writer.println("</html>");
    }
}
