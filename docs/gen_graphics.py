import matplotlib.pyplot
import os
import pathlib

my_dir = pathlib.Path(__file__).parent
data = list(range(10))
matplotlib.pyplot.bar(data, data)
matplotlib.pyplot.savefig(str(my_dir.joinpath("light.png")), dpi=72, transparent=True)
matplotlib.pyplot.clf()
matplotlib.pyplot.style.use("dark_background")
matplotlib.pyplot.bar(data, data)
matplotlib.pyplot.savefig(str(my_dir.joinpath("dark.png")), dpi=72, transparent=True)
