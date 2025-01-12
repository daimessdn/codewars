def generate_hashtag(s):
    result = "#"

    for i in s.split(" "):
        if (i != "" and len(i) > 1):
            result += i[0].upper() + i[1:].lower()

        elif len(i) == 1:
            result += i[0].upper()

    return False if (s == "" or len(result) > 140) else result
