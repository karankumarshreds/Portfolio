from django.shortcuts import render


def home(req):
    context = {}
    return render(req, 'index.html', context)
