import math


def binary_fn(haystack, needle):
    lo = 0
    hi = len(haystack)

    while lo < hi:
        mid = math.floor(lo + ((hi - lo) / 2))
        if haystack[mid] == needle:
            return True
        elif haystack[mid] < needle:
            lo = mid + 1
        else:
            hi = mid

    return False
