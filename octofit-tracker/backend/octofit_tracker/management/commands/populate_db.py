from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        # 清空所有数据
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # 创建用户
        users = [
            User(email='ironman@marvel.com', name='Iron Man', team='marvel'),
            User(email='spiderman@marvel.com', name='Spider-Man', team='marvel'),
            User(email='batman@dc.com', name='Batman', team='dc'),
            User(email='wonderwoman@dc.com', name='Wonder Woman', team='dc'),
        ]
        for user in users:
            user.save()

        # 创建团队
        marvel_team = Team(name='marvel', members=['Iron Man', 'Spider-Man'])
        dc_team = Team(name='dc', members=['Batman', 'Wonder Woman'])
        marvel_team.save()
        dc_team.save()

        # 创建活动
        activities = [
            Activity(user='Iron Man', type='run', duration=30, date='2026-03-13'),
            Activity(user='Spider-Man', type='cycle', duration=45, date='2026-03-13'),
            Activity(user='Batman', type='swim', duration=25, date='2026-03-13'),
            Activity(user='Wonder Woman', type='yoga', duration=60, date='2026-03-13'),
        ]
        for activity in activities:
            activity.save()

        # 创建排行榜
        Leaderboard(team='marvel', points=150).save()
        Leaderboard(team='dc', points=120).save()

        # 创建锻炼建议
        workouts = [
            Workout(name='Push Ups', description='Do 20 push ups', suggested_for='marvel'),
            Workout(name='Yoga Stretch', description='15 min yoga stretch', suggested_for='dc'),
        ]
        for workout in workouts:
            workout.save()

        self.stdout.write(self.style.SUCCESS('Test data populated successfully!'))
