from python.src.LinearSearch import linear_fn


def test_linear_search_array():
    foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420]
    assert linear_fn(foo, 69) == True
    assert linear_fn(foo, 1336) == False
    assert linear_fn(foo, 69420) == True
    assert linear_fn(foo, 69421) == False
    assert linear_fn(foo, 1) == True
    assert linear_fn(foo, 0) == False
