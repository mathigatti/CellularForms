import bpy
import sys

argv = sys.argv
argv = argv[argv.index("--") + 1:] # get all args after "--"

stl_in = argv[0]
obj_out = stl_in.replace(".stl",".obj")

bpy.ops.import_mesh.stl(filepath=stl_in, axis_forward='-Z', axis_up='Y')
bpy.ops.export_scene.obj(filepath=obj_out, axis_forward='-Z', axis_up='Y')