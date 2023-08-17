
# api/urls.py

from django.urls import path
from .views import TaskListCreateView, TaskRetrieveUpdateDestroyView
from .views import TaskListView, TaskDetailView, TaskCreateView, TaskUpdateView, TaskDeleteView

app_name = 'api'

urlpatterns = [
    path('', TaskListView.as_view(), name='home'),
    path('tasks/', TaskListCreateView.as_view(), name='task-list-create'),
    path('tasks/<int:pk>/', TaskRetrieveUpdateDestroyView.as_view(), name='task-retrieve-update-destroy'),

    path('tasks/list/', TaskListView.as_view(), name='task-list'),
    path('tasks/<int:pk>/detail/', TaskDetailView.as_view(), name='task-detail'),
    path('tasks/add/', TaskCreateView.as_view(), name='task-create'),
    path('tasks/<int:pk>/edit/', TaskUpdateView.as_view(), name='task-update'),
    path('tasks/<int:pk>/delete/', TaskDeleteView.as_view(), name='task-delete'),
]
