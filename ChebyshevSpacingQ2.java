import java.util.stream.IntStream;

public class ChebyshevSpacingQ2 {
    public static void main(String[] args) {
        solveQuestion2();
    }

    public static void solveQuestion2() {
        System.out.println("\n--- SOLUTION FOR QUESTION 2 ---\n");

        double xmin = 1.0;
        double xmax = 3.0;
        int n = 3; // 3 precision positions required
        double initialCrankAngle = 30.0;
        double initialFollowerAngle = 200.0;
        double deltaTheta = 90.0;
        double deltaPhi = 90.0;

        double[] x = new double[n];
        double[] theta = new double[n], phi = new double[n];

        System.out.println("Chebyshev spacing for y=1/x in range [1,3]:");
        System.out.println("------------------------------------------");
        System.out.println("i | Precision Point (x_i) | θ | φ");
        System.out.println("------------------------------------------");

        IntStream.range(0, n).forEach(i -> {
            // Calculate Chebyshev nodes
            double chebyshevPoint = (xmin + xmax) / 2.0 + (xmax - xmin) / 2.0 *
                    Math.cos((2.0 * i + 1.0) * Math.PI / (2.0 * n));
            x[i] = chebyshevPoint;

            // Calculate function value y = 1/x (not used further but for reference)
            double y = 1.0 / x[i];

            // Calculate angles
            theta[i] = initialCrankAngle + i * deltaTheta;
            phi[i] = initialFollowerAngle + i * deltaPhi;

            System.out.printf("%d | %.4f | %.1f° | %.1f°\n",
                    i + 1, x[i], theta[i], phi[i]);
        });
    }
}