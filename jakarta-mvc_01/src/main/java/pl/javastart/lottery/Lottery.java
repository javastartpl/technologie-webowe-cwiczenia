package pl.javastart.lottery;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

class Lottery {

    static List<Integer> getCommonElements(List<Integer> source, List<Integer> target) {
        List<Integer> sourceCopy = new ArrayList<>(source);
        sourceCopy.retainAll(target);
        return sourceCopy;
    }

    static List<Integer> getRandomNumbers() {
        List<Integer> numberList = IntStream.rangeClosed(1, 49)
                .boxed()
                .collect(Collectors.toList());
        Collections.shuffle(numberList);
        return numberList.subList(0, 6);
    }

}
