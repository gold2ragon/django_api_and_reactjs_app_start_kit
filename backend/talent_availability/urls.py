from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from talent_availability import views

urlpatterns = [
  url(r'^/all', views.TalentAvailabilityList.as_view()),
  url(r'^/(?P<pk>[0-9]+)/$', views.TalentAvailabilityDetail.as_view()),
]
