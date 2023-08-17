# api/views.py
from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View
from .forms import TaskForm

class TaskListCreateView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    template_name = 'api/task_list.html'

class TaskRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    template_name = 'api/task_detail.html'

class TaskListView(View):
    def get(self, request):
        tasks = Task.objects.all()
        return render(request, 'api/task_list.html', {'task_list': tasks})

class TaskDetailView(View):
    def get(self, request, pk):
        task = Task.objects.get(pk=pk)
        return render(request, 'api/task_detail.html', {'task': task, 'form': TaskForm(instance=task)})

class TaskCreateView(View):
    def get(self, request):
        form = TaskForm()
        return render(request, 'api/task_form.html', {'form': form})

    def post(self, request):
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('api:task-list'))
        return render(request, 'api/task_form.html', {'form': form})

class TaskUpdateView(View):
    def get(self, request, pk):
        task = Task.objects.get(pk=pk)
        form = TaskForm(instance=task)
        return render(request, 'api/task_form.html', {'form': form, 'task': task})
    
    def post(self, request, pk):
        task = Task.objects.get(pk=pk)
        form = TaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect(reverse('api:task-detail', args=[pk]))
        return render(request, 'api/task_form.html', {'form': form, 'task': task})
    
class TaskDeleteView(View):
    def get(self, request, pk):
        task = Task.objects.get(pk=pk)
        return render(request, 'api/task_confirm_delete.html', {'task': task})

    def post(self, request, pk):
        task = Task.objects.get(pk=pk)
        task.delete()
        return redirect(reverse('api:task-list'))