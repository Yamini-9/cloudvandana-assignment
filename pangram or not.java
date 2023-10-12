import java.util.HashSet;

public class PangramChecker {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog"; // Replace this with your input string

        boolean isPangram = isPangram(input);
        
        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean isPangram(String str) {
        // Create a HashSet to store the unique characters encountered
        HashSet<Character> alphabetSet = new HashSet<>();

        // Convert the input string to lowercase to ignore case
        str = str.toLowerCase();

        // Iterate through the characters in the string
        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);

            // Check if the character is a lowercase letter
            if (c >= 'a' && c <= 'z') {
                alphabetSet.add(c);
            }
        }

        // Check if the size of the HashSet is 26 (contains all letters from 'a' to 'z')
        return alphabetSet.size() == 26;
    }
}
